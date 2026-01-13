import { defineConfig } from "vite";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: "/kid-academy/",
    root: "src",
    plugins: [
        tailwindcss(),
        viteStaticCopy({
            targets: [
                {
                    src: "templates/**/*.html",
                    dest: "templates",
                },
                { src: "assets/data/**/*", dest: "assets/data" },
            ],
        }),
    ],
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        minify: "esbuild",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                quizz: resolve(__dirname, "src/quizz.html"),
                category: resolve(__dirname, "src/category.html"),
            },
            output: {
                // JS chunks and entries go to assets/js
                chunkFileNames: "assets/js/[name]-[hash].js",
                entryFileNames: "assets/js/[name]-[hash].js",
                // CSS files go to assets/css
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith(".css")) {
                        return "assets/css/[name]-[hash][extname]";
                    }
                    // other assets (images/fonts) stay in their folder
                    return "assets/[name]-[hash][extname]";
                },
            },
        },
    },
});
