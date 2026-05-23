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
    // Strip the JWT token string from login/me/refresh JSON responses.
    // The admin panel authenticates exclusively via the HTTP-only cookie that
    // Payload sets automatically — the token in the response body is never
    // consumed by any code in this project and only widens the exposure
    // surface (proxy logs, browser extensions, devtools network tab).
    removeTokenFromResponses: true,
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};
