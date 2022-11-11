// @ts-check
/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    extends: require.resolve('./rules'),
    settings: {
        'import/resolver': {
            typescript: {},
        },
        react: {
            version: 'detect',
        },
    },
    rules: {
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                },
                'newlines-between': 'always',
                groups: [
                    ['builtin', 'external'],
                    'internal',
                    ['parent', 'sibling', 'index'],
                ],
                pathGroups: [
                    {
                        pattern:
                            '{api,assets,components,configuration,models,services,styles,utils}/**',
                        group: 'internal',
                    },
                ],
            },
        ],
        // TODO fixeable rules -- start region
        'array-callback-return': 'warn',
        'consistent-return': 'warn',
        eqeqeq: 'warn',
        'no-nested-ternary': 'warn',
        'no-underscore-dangle': 'warn',
        'import/prefer-default-export': 'warn',
        'react/destructuring-assignment': 'warn',
        'react/no-unused-prop-types': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        // TODO fixeable rules -- end region
        'no-restricted-exports': 'off', // TODO: fix
        'default-param-last': 'off', // TODO: fix
        'react/function-component-definition': 'off', // TODO: fix
        'react/jsx-no-useless-fragment': 'off', // TODO: fix
        'react/jsx-no-constructed-context-values': 'off', // TODO: fix
        'react/no-unstable-nested-components': 'off', // TODO: fix
    },
};
