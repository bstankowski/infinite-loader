/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/dist/config.js";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            localsConvention: "camelCase",
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        exclude: [...configDefaults.exclude, "**/e2e/**"],
        setupFiles: "src/test/setup.ts",
    },
});
