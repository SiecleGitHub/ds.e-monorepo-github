import Ts from 'rollup-plugin-typescript2';

export default {
  input: ['src/index.ts', 'src/atoms/Button/index.ts', 'src/atoms/Color/index.ts'],
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  external: ['react'],
  plugins: [Ts()],
  preserveEntrySignatures: true,
};
