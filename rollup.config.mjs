import typescript from '@rollup/plugin-typescript';
// minify product bundles
import { terser } from 'rollup-plugin-terser';
import packageJson from './package.json' assert { type: 'json' };
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'es',
        sourcemap: true,
        name: packageJson.name,
        interop: 'compat',
      },
    ],
    plugins: [
      postcss({
        extract: true,
        modules: false,
        use: ['sass'],
      }),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
  },
];
