import { CSSProperties } from 'react';

export const themeColors = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'error',
] as const;

export type ThemeColorValue = typeof themeColors[number];
// export type ColorCode =
//     `#${string}${string}${string}${string}${string}${string}`;

export type JazzyVariant = 'outline' | 'solid';
export type JazzyColor = ThemeColorValue | CSSProperties['color'];
// export type JazzyColor = ThemeColorValue | ColorCode | CSSProperties['color'];

export const colorProps = ['bg', 'color'] as const;

export type ColorValue = typeof colorProps[number];
export type ColorProps = Partial<Record<ColorValue, JazzyColor>>;
