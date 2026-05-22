import path from "path";
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "filename",
  },
  upload: {
    // Store uploads on local VPS disk — resolved from process.cwd() at runtime.
    // PM2 sets cwd to the project root, so this resolves to /var/www/prod/media/
    staticDir: path.resolve(process.cwd(), "media"),
    imageSizes: [
      { name: "thumbnail", width: 400, height: 250, position: "centre" },
      { name: "card", width: 768, height: 480, position: "centre" },
      { name: "feature", width: 1200, height: 630, position: "centre" },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "caption",
      type: "text",
    },
  ],
};
