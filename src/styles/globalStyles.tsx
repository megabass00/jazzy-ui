import React, { Global } from '@emotion/react';

import { darken } from './colorTools';

const GlobalStyles = (): JSX.Element => {
    return (
        <Global
            styles={(theme) => [
                {
                    '*': {
                        fontFamily: 'Regular',
                        boxSizing: 'border-box',
                    },
                    'html,body': {
                        padding: 0,
                        margin: 0,
                        backgroundColor: theme.palette.grey[50],
                        color: theme.palette.text.main,
                    },
                    '::-webkit-scrollbar': {
                        width: theme.spacing(0.75),
                        background: theme.palette.grey[50],
                    },
                    '::-webkit-scrollbar-track': {
                        boxShadow: `inset 0 0 5px ${darken(
                            theme.palette.grey[50],
                            0.2
                        )}`,
                    },
                    '::-webkit-scrollbar-thumb': {
                        width: theme.spacing(0.75),
                        background: theme.palette.grey[400],
                        borderRadius: theme.spacing(0.5),
                    },
                    a: {
                        color: 'inherit',
                        textDecoration: 'none',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Regular',
                        src: `url(${theme.typography.fonts.regular}) format("truetype")`,
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Italic',
                        src: `url(${theme.typography.fonts.italic}) format("truetype")`,
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Bold',
                        src: `url(${theme.typography.fonts.bold}) format("truetype")`,
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'SemiBold',
                        src: `url(${theme.typography.fonts.semibold}) format("truetype")`,
                    },
                },
            ]}
        />
    );
};

export default GlobalStyles;
