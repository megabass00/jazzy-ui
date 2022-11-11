import { Theme } from '@emotion/react';
import { CSSProperties } from 'react';

import { JazzyColor, SpaceProps } from 'typings';

import { alpha } from './colorTools';
import { ThemeShadowFn, ThemeSpacingFn } from './types';

const SPACE_PIXELS_VALUE = 8;

export const spaceFromValue = (value: number): number =>
    value * SPACE_PIXELS_VALUE;

export const spacing: ThemeSpacingFn = (spaceV, spaceH) =>
    spaceH !== null && spaceH !== undefined
        ? `${spaceV * SPACE_PIXELS_VALUE}px ${spaceH * SPACE_PIXELS_VALUE}px`
        : `${spaceFromValue(spaceV)}px`;

export const shadow: ThemeShadowFn = (color = 'darkgray', elevation = 1) =>
    `0px ${elevation * 1}px ${elevation * 8}px ${alpha(color, 0.15)}`;

export const isPlainObject = (
    item: unknown
): item is Record<keyof any, unknown> =>
    item !== null && typeof item === 'object' && item.constructor === Object;

export const createTheme = <T>(baseTheme: T, theme: unknown): T => {
    const output = { ...baseTheme };
    if (isPlainObject(baseTheme) && isPlainObject(theme)) {
        Object.keys(theme).forEach((key) => {
            if (key === '__proto__') {
                return;
            }
            if (
                isPlainObject(theme[key]) &&
                key in baseTheme &&
                isPlainObject(baseTheme[key])
            ) {
                (output as Record<keyof any, unknown>)[key] = createTheme(
                    baseTheme[key],
                    theme[key]
                );
            } else {
                (output as Record<keyof any, unknown>)[key] = theme[key];
            }
        });
    }
    return output;
};

export const getStylesFromSpace = ({
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
}: SpaceProps): CSSProperties => ({
    ...(m && { margin: spaceFromValue(m) }),
    ...(mt && { marginTop: spaceFromValue(mt) }),
    ...(mr && { marginRight: spaceFromValue(mr) }),
    ...(mb && { marginBottom: spaceFromValue(mb) }),
    ...(ml && { marginLeft: spaceFromValue(ml) }),
    ...(mx && {
        marginLeft: spaceFromValue(mx),
        marginRight: spaceFromValue(mx),
    }),
    ...(my && {
        marginLeft: spaceFromValue(my),
        marginRight: spaceFromValue(my),
    }),
    ...(p && { padding: spaceFromValue(p) }),
    ...(pt && { paddingTop: spaceFromValue(pt) }),
    ...(pr && { paddingRight: spaceFromValue(pr) }),
    ...(pb && { paddingBottop: spaceFromValue(pb) }),
    ...(pl && { paddingLeft: spaceFromValue(pl) }),
    ...(px && {
        paddingLeft: spaceFromValue(px),
        paddingRight: spaceFromValue(px),
    }),
    ...(py && {
        paddingLeft: spaceFromValue(py),
        paddingRight: spaceFromValue(py),
    }),
});

export const getColorFromThemeColor = (
    theme: Theme,
    color?: JazzyColor
): string => {
    switch (color) {
        case 'primary':
            return theme.palette.brand.primary.main;
        case 'secondary':
            return theme.palette.brand.secondary.main;
        case 'success':
            return theme.palette.feedback.success.main;
        case 'info':
            return theme.palette.feedback.info.main;
        case 'warning':
            return theme.palette.feedback.warning.main;
        case 'error':
            return theme.palette.feedback.error.main;
        case undefined:
            return theme.palette.brand.primary.main;
        default:
            return color;
    }
};
