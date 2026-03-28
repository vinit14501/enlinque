import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
