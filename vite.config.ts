import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(async () => {
  // Conditionally load Replit plugins only when needed
  const isReplit = process.env.REPL_ID !== undefined;
  const isDevelopment = process.env.NODE_ENV !== "production";
  
  let replitPlugins: Plugin[] = [];
  
  if (isReplit && isDevelopment) {
    try {
      const [cartographerModule, devBannerModule, runtimeErrorOverlayModule] = await Promise.all([
        import("@replit/vite-plugin-cartographer"),
        import("@replit/vite-plugin-dev-banner"),
        import("@replit/vite-plugin-runtime-error-modal"),
      ]);

      replitPlugins = [
        runtimeErrorOverlayModule.default(),
        cartographerModule.cartographer(),
        devBannerModule.devBanner(),
      ];
    } catch {
      // If Replit plugins fail to load, continue without them
      replitPlugins = [];
    }
  }

  return {
    plugins: [
      react(),
      ...replitPlugins,
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
