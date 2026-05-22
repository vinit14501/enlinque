import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

interface ArticleBodyProps {
  content: Record<string, unknown>;
}

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
      <RichText data={content as unknown as SerializedEditorState} />
    </div>
  );
}
