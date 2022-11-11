import { Theme, ThemeProvider } from '@emotion/react';
import React, { FC, ReactNode } from 'react';

import { createTheme, GlobalStyles, theme as baseTheme } from '../styles';

export interface JazzyProviderProps {
    children: ReactNode;
    theme?: Theme;
}
const JazzyProvider: FC<JazzyProviderProps> = ({ children, theme = {} }) => (
    <ThemeProvider theme={createTheme(baseTheme, theme)}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

export default JazzyProvider;
