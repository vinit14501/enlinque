import { revalidatePath } from "next/cache";
import type { CollectionConfig, FieldHook } from "payload";

const slugifyValue: FieldHook = ({ value }) => {
  if (typeof value !== "string") return value;
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "date", "featured", "_status"],
    listSearchableFields: ["title", "excerpt"],
    description: "Blog articles published on the Enlinque website.",
    preview: (doc) => {
      const slug = typeof doc?.slug === "string" ? doc.slug : undefined;
      if (!slug) return null;
      const previewSecret = process.env.PREVIEW_SECRET;
      if (!previewSecret) return null;
      const params = new URLSearchParams({
        slug,
        collection: "posts",
        path: `/blog/${slug}`,
        previewSecret,
      });
      const baseURL =
        process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000";
      return `${baseURL}/preview?${params.toString()}`;
    },
  },
  // Explicit read access is required when versions/drafts are enabled.
  // Without it, Payload enforces access control with no default policy,
  // causing 403 errors on anonymous (public) reads via the Local API.
  //
  // Rule:
  //  - Authenticated CMS users → read everything (drafts + published)
  //  - Public / unauthenticated → read only published documents
  //    PLUS documents that pre-date draft mode (no _status field yet),
  //    as recommended in the Payload docs for migrated collections.
  access: {
    read: ({ req }) => {
      if (req.user) return true;
      return {
        or: [
          { _status: { equals: "published" } },
          { _status: { exists: false } },
        ],
      };
    },
  },
  versions: {
    drafts: {
      autosave: {
        // Payload default is 2000 ms. 375 ms is 5× too aggressive:
        // it fires a PATCH /api/posts/:id draft-save on every keystroke,
        // amplifies React state churn (triggering browser DevTools extensions
        // far more often than necessary), inflates MongoDB version documents,
        // and is the primary application-level contributor to the
        // chrome.runtime.lastError "message channel closed" console noise.
        interval: 2000,
      },
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description:
          "URL-friendly identifier used in the blog path: /blog/<slug>. Auto-sanitized on save.",
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [slugifyValue],
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      maxLength: 300,
      admin: {
        description:
          "Brief summary displayed in blog cards and meta description (max 300 chars).",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Business Strategy", value: "Business Strategy" },
        { label: "Digital Marketing", value: "Digital Marketing" },
        { label: "Web Development", value: "Web Development" },
        { label: "Leadership", value: "Leadership" },
        { label: "Technology", value: "Technology" },
      ],
    },
    {
      name: "date",
      type: "date",
      required: true,
      admin: {
        date: { displayFormat: "MMMM d, yyyy" },
        description: "Publication date displayed on the article page.",
      },
    },
    {
      name: "readTime",
      type: "text",
      required: true,
      admin: {
        description:
          "Estimated reading time displayed on the article. Example: '6 min read'",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description:
          "Pin this post as the featured article at the top of the blog listing.",
      },
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      required: false,
      admin: {
        description: "Hero image used in the article header and blog card.",
      },
    },
    {
      name: "coverImageAlt",
      type: "text",
      required: true,
      admin: {
        description:
          "Descriptive alt text for the cover image (required for accessibility and SEO).",
      },
    },
    {
      name: "author",
      type: "group",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          defaultValue: "Enlinque Team",
        },
        {
          name: "role",
          type: "text",
          required: true,
          defaultValue: "Enlinque Consulting",
        },
        {
          name: "avatarUrl",
          type: "text",
          admin: {
            description:
              "Absolute URL or path to the author avatar image. Leave blank to show initials fallback.",
          },
        },
        {
          name: "linkedIn",
          type: "text",
          admin: {
            description:
              "Full LinkedIn profile URL (e.g. https://linkedin.com/in/username).",
          },
        },
      ],
    },
    {
      name: "tags",
      type: "array",
      admin: {
        position: "sidebar",
        description: "Keyword tags displayed on the article header.",
      },
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "content",
      type: "richText",
      required: true,
      admin: {
        description:
          "Full article body. Use the headings, lists, blockquotes, and image blocks in the toolbar.",
      },
    },
  ],
  // On-demand ISR: immediately purge cached pages when a post is published,
  // updated while published, or unpublished — so the blog listing and
  // article page always reflect the current CMS state without a rebuild.
  hooks: {
    afterChange: [
      ({ doc, previousDoc }) => {
        const slug = typeof doc.slug === "string" ? doc.slug : "";
        const isPublished = doc._status === "published";
        const wasPublished = previousDoc?._status === "published";

        // Revalidate when the post is (or was) publicly visible.
        // Covers: draft→published, published update, published→draft.
        if (isPublished || wasPublished) {
          revalidatePath("/blog");
          if (slug) revalidatePath(`/blog/${slug}`);
        }
      },
    ],
  },
};
