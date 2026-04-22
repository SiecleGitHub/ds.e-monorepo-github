<!--
I have added the package react and installed rollup and configured it in rollup.config.js. However, rollup fails with errors. Can you fix that
-->

Perfect! I've fixed the rollup configuration issues. Here's what was wrong and what I corrected:

Issues Fixed:
Deprecated preserveModules option: Changed to preserveEntrySignatures: true in rollup.config.js (Rollup 4.x deprecated preserveModules).

Missing rootDir in TypeScript config: Added "rootDir": "src" to tsconfig.json to specify the source directory.

Deprecated moduleResolution: Changed from "node" to "bundler" in tsconfig.json for better compatibility with modern bundlers.

Module type warning: Added "type": "module" to package.json to eliminate the ES module parsing warning.

Unresolved React dependency: Moved react from devDependencies to peerDependencies and added external: ['react'] in rollup.config.js since this is a component library that expects consumers to provide React.

The build now completes successfully without any errors or warnings. The output preserves the module structure and generates proper ESM files with source maps and TypeScript declarations.
