// @ts-check
/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
    extends: [
        'react-app',
        require.resolve('./base'),
        require.resolve('./emotion'),
        require.resolve('./prettier'),
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.tsx'] },
        ],
        'react/require-default-props': [
            'error',
            { ignoreFunctionalComponents: true },
        ],
        'react/jsx-props-no-spreading': 'off',
        'import/no-unresolved': [2, { caseSensitive: false }],
    },
};
