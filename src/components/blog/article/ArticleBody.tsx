import React from "react";
import {
  RichText,
  type JSXConvertersFunction,
} from "@payloadcms/richtext-lexical/react";
import type { SerializedBlockNode } from "@payloadcms/richtext-lexical";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { slugifyHeading } from "@/components/blog/blogData";
import CalloutBlock from "@/components/blog/blocks/CalloutBlock";

interface ArticleBodyProps {
  content: Record<string, unknown>;
}

/**
 * Custom JSX converters for Payload's Lexical serialiser.
 *
 * The only override here is `heading`: the default converter renders plain
 * <h2>/<h3> elements with no `id` attribute, which makes the Table-of-Contents
 * anchor links non-functional. We compute the same slug that
 * `extractHeadingsFromLexical` produces (via `slugifyHeading`) and attach it
 * as the element `id`, so every TOC anchor resolves to a real DOM node.
 */
const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  heading: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({ nodes: node.children });

    // Derive anchor id from the plain-text content of the heading's children.
    // Only h2 and h3 are listed in the TOC, but applying to all heading levels
    // is harmless and future-proof.
    const text = (node.children as Array<{ text?: string }>)
      .map((c) => c.text ?? "")
      .join("");
    const id = text.trim() ? slugifyHeading(text) : undefined;

    const Tag = node.tag as keyof React.JSX.IntrinsicElements;
    return <Tag id={id}>{children}</Tag>;
  },
  // ── Custom on-brand blocks ──────────────────────────────────────────────
  // Spread any default block converters first so other future block types
  // (e.g. images, uploads, relationships) keep working, then override callout.
  blocks: {
    ...(defaultConverters.blocks ?? {}),
    callout: ({
      node,
    }: {
      node: SerializedBlockNode<{
        style?: "info" | "tip" | "key-takeaway" | "warning";
        content?: string;
      }>;
    }) => {
      return (
        <CalloutBlock
          style={node.fields.style ?? "info"}
          content={node.fields.content ?? ""}
        />
      );
    },
  },
});

/**
 * Renders the article body using Payload's Lexical rich-text serialiser.
 *
 * The <RichText> component is a React Server Component that converts the
 * Lexical JSON editor state (stored in Payload) into native HTML elements
 * (h2, h3, p, ul, ol, blockquote, img, etc.).  Tailwind's @tailwindcss/typography
 * plugin (prose classes) handles all typography styling.
 */
export default function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#000048] prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-[#000048] prose-blockquote:border-l-4 prose-blockquote:border-[#0b60a0] prose-blockquote:not-italic prose-blockquote:text-gray-600 prose-ol:text-gray-700 prose-ul:text-gray-700 prose-a:text-[#0b60a0] prose-a:no-underline hover:prose-a:underline">
      <RichText
        data={content as unknown as SerializedEditorState}
        converters={jsxConverters}
      />
    </div>
  );
}
