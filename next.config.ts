import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,

  serverExternalPackages: ["mongoose", "@payloadcms/db-mongodb"],

  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Advertising and analytics scripts — Google Tag Manager, Google Ads,
              // Meta (Facebook) Pixel, LinkedIn Insight Tag.
              // 'unsafe-inline' is required by Next.js for its own inline scripts.
              `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://connect.facebook.net https://snap.licdn.com`,
              "style-src 'self' 'unsafe-inline'",
              // Tracking pixels from ad networks are delivered as 1×1 images.
              // blob: is required for the Payload admin panel's file-upload preview thumbnails.
              "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.facebook.com https://px.ads.linkedin.com",
              "font-src 'self'",
              // XHR/fetch endpoints for analytics and conversion reporting.
              "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://stats.g.doubleclick.net https://www.facebook.com https://px.ads.linkedin.com",
              // DoubleClick and GTM Preview require frame-src for certain ad features.
              "frame-src https://td.doubleclick.net https://www.googletagmanager.com",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

// withPayload integrates Payload CMS with Next.js:
// - Adds Payload's server-external packages
// - Injects the @payload-config module alias at build time
// - Configures webpack to handle Payload's CSS and SCSS assets
export default withPayload(nextConfig);
