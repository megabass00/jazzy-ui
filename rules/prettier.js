// @ts-check
/**
 * @type {import('prettier').Config}
 */
const prettierConfig = {
    singleQuote: true,
    tabWidth: 4,
    arrowParens: 'always',
    endOfLine: 'auto',
};

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
const config = {
    extends: ['plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': ['error', prettierConfig],
    },
};

module.exports = config;
