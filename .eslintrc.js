module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ["airbnb-base"],
    rules: {
        semi: ["error", "always"],
        strict: ["error"],
        indent: ["error", 4],
        quotes: ["error", "single"],
        "no-console": ["warn"],
        "no-unused-expressions": ["warn"],
    },
};
