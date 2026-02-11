module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/dev/main-portfolio/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/16611__pnpm_890f89cb._.js",
  "chunks/[root-of-the-server]__048520c1._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/dev/main-portfolio/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];