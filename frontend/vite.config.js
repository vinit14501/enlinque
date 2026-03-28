import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { compression } from "vite-plugin-compression2"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    // Pre-compress all build assets with brotli and gzip so Nginx can serve
    // them directly via `brotli_static on` and `gzip_static on` without
    // compressing on the fly for every request.
    compression({ algorithm: "brotliCompress", exclude: [/\.(png|jpg|webp|ico|woff2)$/] }),
    compression({ algorithm: "gzip", exclude: [/\.(png|jpg|webp|ico|woff2)$/] }),

    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        // Cache static assets (hashed filenames) for 1 year.
        // Cache HTML and API responses with network-first strategy.
        globPatterns: ["**/*.{js,css,html,ico,png,webp,woff2}"],
        runtimeCaching: [
          {
            // Hashed JS/CSS chunks — cache first (immutable assets)
            urlPattern: /\/assets\/.+\.(js|css)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "static-assets",
              expiration: { maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            // Hero images — cache first with 7-day expiry
            urlPattern: /\/images\/.+\.webp$/,
            handler: "CacheFirst",
            options: {
              cacheName: "hero-images",
              expiration: { maxAgeSeconds: 60 * 60 * 24 * 7 },
            },
          },
          {
            // Google Fonts — stale while revalidate
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: { cacheName: "google-fonts-stylesheets" },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              expiration: { maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
        ],
      },
      manifest: {
        name: "Enlinque Consulting LLC",
        short_name: "Enlinque",
        description:
          "Professional business solutions including Fractional CxO services and Website Development.",
        theme_color: "#000048",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],

  server: {
    port: 5173,
    historyApiFallback: true,
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    // Target modern browsers — avoids generating legacy transpilation overhead.
    // Covers >95% of users as of 2024.
    target: ["es2020", "chrome87", "firefox78", "safari14", "edge88"],
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "router-vendor": ["react-router-dom"],
          "motion-vendor": ["framer-motion"],
          "icons-vendor": ["react-icons"],
          "http-vendor": ["axios"],
          "toast-vendor": ["react-hot-toast"],
        },
        chunkFileNames: (chunkInfo) => {
          const prefix = chunkInfo.name.includes("vendor") ? "vendor" : "chunk"
          return `assets/${prefix}/[name]-[hash].js`
        },
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        passes: 2,
      },
      format: {
        comments: false,
      },
    },
  },
})
