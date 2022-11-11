module.exports = {
    extends: ['./react'].map(require.resolve),
    overrides: [
        {
            files: ['*.ts'],
            extends: ['./typescript'].map(require.resolve),
        },
        {
            files: ['*.tsx'],
            extends: ['./react', './typescript'].map(require.resolve),
            rules: {
                'react/prop-types': 'off',
            },
        },
    ],
};
