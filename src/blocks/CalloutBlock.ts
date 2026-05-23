import type { Block } from "payload";

/**
 * Callout Block — an on-brand highlight box for use inside blog articles.
 *
 * Four visual variants match Enlinque's colour system:
 *   info         – blue left border  (#0b60a0) — general highlights
 *   tip          – green left border — practical advice
 *   key-takeaway – navy left border  (#000048) — key insights
 *   warning      – amber left border — caveats / watch-outs
 *
 * In the Lexical editor, click the "+" (insert) button → Block → Callout.
 */
export const CalloutBlock: Block = {
  slug: "callout",
  labels: {
    singular: "Callout",
    plural: "Callouts",
  },
  fields: [
    {
      name: "style",
      type: "select",
      required: true,
      defaultValue: "info",
      admin: {
        description: "Choose the visual style of the callout box.",
      },
      options: [
        { label: "ℹ️  Info / Highlight", value: "info" },
        { label: "💡 Tip", value: "tip" },
        { label: "🔑 Key Takeaway", value: "key-takeaway" },
        { label: "⚠️  Warning", value: "warning" },
      ],
    },
    {
      name: "content",
      type: "textarea",
      required: true,
      admin: {
        description: "The text displayed inside the callout box.",
        rows: 3,
      },
    },
  ],
};
