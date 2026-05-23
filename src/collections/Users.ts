import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: {
    tokenExpiration: 7200,
    maxLoginAttempts: 5,
    lockTime: 600 * 1000,
    cookies: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};
