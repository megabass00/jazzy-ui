// @ts-check
/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
    extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            { js: 'never', ts: 'never', tsx: 'never' },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    'jest/**/*.js',
                    'src/setupTests.ts?(x)',
                    'src/**/*.{test,spec,stories}.ts?(x)',
                ],
            },
        ],
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
            },
        ],
    },
};
