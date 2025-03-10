import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { peerDependencies } from "./package.json";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        dts({
            insertTypesEntry: true,
            exclude: ["**/*.stories.ts", "**/*.test.tsx"],
        }),
    ],
    build: {
        copyPublicDir: false,
        lib: {
            entry: "./lib/main.ts",
            formats: ["es"],
        },
        rollupOptions: {
            external: Object.keys(peerDependencies),
            output: {
                globals: { react: "React", "react-dom": "ReactDOM" },
                entryFileNames: "main.js",
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./lib"),
        },
    },
});
