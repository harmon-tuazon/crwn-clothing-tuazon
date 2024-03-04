import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import vitePluginSvgr from "vite-plugin-svgr";


export default defineConfig({
    plugins: [
        viteReact(),
        vitePluginSvgr()
    
    ],
    server: {
        port: 3000,
        open: true
    },
    build: {
        outDir: 'build',
      },
})