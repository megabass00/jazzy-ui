// @ts-check
/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
    plugins: ['@emotion'],
    rules: {
        '@emotion/syntax-preference': ['error', 'object'],
        '@emotion/jsx-import': 'error',
        '@emotion/no-vanilla': 'error',
        '@emotion/import-from-emotion': 'error',
        '@emotion/styled-import': 'error',
    },
};
