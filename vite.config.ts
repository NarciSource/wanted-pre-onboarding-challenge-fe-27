import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return {
        plugins: [react()],
        base: process.env.VITE_PUBLIC_URL,
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
        appType: "spa",
        build: {
            rollupOptions: {
                input: {
                    main: "index.html",
                    auth: "auth.html",
                },
            },
        },
    };
});
