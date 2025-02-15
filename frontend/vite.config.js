import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    historyApiFallback: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks by major dependencies
          "react-vendor": ["react", "react-dom"],
          // "ui-vendor": ["@/components/ui"],
          // "utils-vendor": ["lodash", "recharts"],
        },
        // Improved chunk naming strategy
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
