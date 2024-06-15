import { defineConfig } from "vite"

const config = defineConfig({
    build: {
        outDir: "docs"
    },
    base: "random-content-website"
})

export default config;