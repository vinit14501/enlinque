import type { MetadataRoute } from "next";

const PROD_URL = "https://enlinque.com";

/**
 * Paths served by Payload CMS that must never be crawled or indexed.
 *
 * /admin      – Payload CMS admin panel and all its sub-routes
 *               (login, collections, globals, dashboard, …)
 * /api/       – Payload REST API + GraphQL endpoint + GraphQL playground
 *               (/api/graphql, /api/graphql-playground, /api/users, …)
 *
 * Note: In the Robots Exclusion Protocol (RFC 9309) a path prefix matches
 * the exact string and every URL that starts with it, so "/admin" blocks
 * /admin, /admin/, /admin/login, /admin/collections/posts, etc.
 */
const CMS_DISALLOW_PATHS = ["/admin", "/api/"] as const;

export default function robots(): MetadataRoute.Robots {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL ?? "";
  const isProd = serverUrl === PROD_URL;

  // Non-production environments (QA / staging / local dev):
  // disallow every crawler entirely so staging content never leaks
  // into search-engine indexes.
  if (!isProd) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block the Payload CMS admin panel and all API endpoints.
        // This prevents crawlers from discovering, crawling, or indexing
        // the admin dashboard and internal API surface.
        disallow: [...CMS_DISALLOW_PATHS],
      },
    ],
    sitemap: `${PROD_URL}/sitemap.xml`,
    host: PROD_URL,
  };
}
