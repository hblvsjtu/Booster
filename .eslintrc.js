module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            // @TODO Deprecated https://eslint.org/docs/user-guide/configuring#deprecated
            experimentalObjectRestSpread: true,
            jsx: true,
            modules: true,
        },
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
    },
    extends: ['plugin:vue/essential', 'airbnb-base'],
    extends: ['airbnb-base'],
    plugins: ['prettier'],
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
    },
};
