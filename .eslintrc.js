module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        project: './tsconfig.json',
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            // @TODO Deprecated https://eslint.org/docs/user-guide/configuring#deprecated
            experimentalObjectRestSpread: true,
            modules: true,
        },
        extraFileExtensions: ['.vue'],
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        // "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    settings: {
        'import/resolver': {
            webpack: {
                config: './build/webpack.common.js',
            },
        },
    },
    plugins: ['html', 'vue', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        semi: ['error', 'always'],
        strict: ['error'],
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-expressions': ['warn'],
        'object-curly-spacing': ['error', 'never'],
        'implicit-arrow-linebreak': 'off',
        'global-require': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'object-curly-newline': 'off',
        'array-bracket-spacing': 2,
        'no-var': 2,
        'no-eval': 2,
        'arrow-spacing': 2,
        'block-spacing': 2,
        'key-spacing': 2,
        'brace-style': 2,

        // 设置 vue-eslint 规则
        'vue/camelcase': 2,
        'vue/require-component-is': 0,
        'vue/require-default-prop': 0,
        'vue/eqeqeq': [2, 'always', {null: 'ignore'}],
        'vue/singleline-html-element-content-newline': 0,
        'vue/html-closing-bracket-newline': [
            2,
            {
                singleline: 'never',
                multiline: 'always',
            },
        ],
        'vue/max-attributes-per-line': 0,
        'vue/html-self-closing': [
            2,
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],

        // 设置 typescript-eslint 规则
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
        '@typescript-eslint/camelcase': 0, // 目前埋点有部分字段无法更换
        '@typescript-eslint/no-non-null-assertion': 0, // 允许非空断言运算符
        '@typescript-eslint/member-delimiter-style': [
            2,
            {
                multiline: {
                    delimiter: 'none',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/no-unused-vars': [0, {args: 'none'}], // TODO 后期逐步替换
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-explicit-any': 0, // TODO
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/object-curly-spacing': ['error', 'never'],
        '@typescript-eslint/comma-dangle': 'off',
    },
};
