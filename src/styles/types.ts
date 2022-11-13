import { CSSProperties } from 'react';

export interface ThemeColor {
    extralight: string;
    light: string;
    main: string;
    dark: string;
    extradark: string;
}

export interface ThemePaletteBrand {
    primary: ThemeColor;
    secondary: ThemeColor;
}

export interface ThemePaletteFeedback {
    success: ThemeColor;
    info: ThemeColor;
    warning: ThemeColor;
    error: ThemeColor;
}

export interface ThemePaletteGrey {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}

export interface ThemePaletteGradient {
    main: string;
    hover: string;
}

export interface ThemePalette {
    brand: ThemePaletteBrand;
    feedback: ThemePaletteFeedback;
    grey: ThemePaletteGrey;
    text: ThemeColor;
    gradient: ThemePaletteGradient;
}

export interface ThemeMediaQuery {
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface ThemeTypographyFonts {
    regular: string;
    italic: string;
    bold: string;
    semibold: string;
}

export interface ThemeTypography {
    fonts: ThemeTypographyFonts;
}

export type ThemeTransitionCreateFn = (
    props: string | string[],
    timingFunction: CSSProperties['transitionTimingFunction']
) => string;
export interface ThemeTransition {
    duration: string;
    create: ThemeTransitionCreateFn;
}

export type ThemeSpacingFn = (spaceV: number, spaceH?: number) => string;
export type ThemeShadowFn = (color?: string, elevation?: number) => string;

export interface Theme {
    palette: ThemePalette;
    mediaquery: ThemeMediaQuery;
    typography: ThemeTypography;
    transition: ThemeTransition;
    spacing: ThemeSpacingFn;
    shadow: ThemeShadowFn;
}
