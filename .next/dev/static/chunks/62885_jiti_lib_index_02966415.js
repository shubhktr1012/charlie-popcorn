(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Development/charlie-popcorn/node_modules/tailwindcss/node_modules/jiti/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function onError(err) {
    throw err; /* ↓ Check stack trace ↓ */ 
}
module.exports = function jiti(filename, opts) {
    const jiti = __turbopack_context__.r("[project]/Development/charlie-popcorn/node_modules/tailwindcss/node_modules/jiti/dist/jiti.js [app-client] (ecmascript)");
    opts = {
        onError,
        ...opts
    };
    if (!opts.transform) {
        opts.transform = __turbopack_context__.r("[project]/Development/charlie-popcorn/node_modules/tailwindcss/node_modules/jiti/dist/babel.js [app-client] (ecmascript)");
    }
    return jiti(filename, opts);
};
}),
]);

//# sourceMappingURL=62885_jiti_lib_index_02966415.js.map