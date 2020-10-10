// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

const pkg = require('./package.json');
export default {
    input: 'src/main.js',
    output: [
        {
            file: pkg.main,
            name: 'myModule',
            format: 'umd',
            sourcemap: true,
        },
        {
            file: pkg.module,
            name: 'myModule',
            format: 'esm',
            sourcemap: true,
        },
    ],
    watch: {
        include: 'src/**',
    },
    plugins: [
        resolve(),
        json(),
        commonjs(),
        babel({
            include: ['src/**', 'test/**'],
            babelHelpers: 'runtime',
        }),
    ],
};
