// @ts-check
/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
    extends: [
        require.resolve('./base'),
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        require.resolve('./prettier'),
    ],
    rules: {
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            { accessibility: 'no-public' },
        ],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            { allowExpressions: true, allowTypedFunctionExpressions: true },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            { ignoreRestSiblings: true },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            { functions: true, classes: true, variables: true },
        ],
    },
    overrides: [
        {
            files: ['*.d.ts'],
            rules: {
                // Avoid wrong triple-slash directives
                'spaced-comment': 'off',
            },
        },
    ],
};
