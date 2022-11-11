// @ts-check
/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
    extends: ['eslint:recommended', require.resolve('./import')],
    env: {
        browser: true,
        es2020: true,
        node: true,
        jest: true,
    },
    parserOptions: {
        sourceType: 'module',
    },
};
