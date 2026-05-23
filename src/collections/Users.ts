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
    cookies: {
      secure: process.env.NODE_ENV === "production",
      // 'strict' prevents the auth cookie from being sent on ANY cross-site
      // request — including top-level navigations from external pages.
      // This is the strongest CSRF posture available and is correct here
      // because the admin panel is same-origin only; no external app ever
      // needs to authenticate via this cookie.
      sameSite: "strict",
    },
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};
