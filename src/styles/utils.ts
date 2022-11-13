import { Theme } from '@emotion/react';
import { CSSProperties } from 'react';

import { ColorProps, JazzyColor, SizeProps, SpaceProps } from 'typings';

import { alpha } from './colorTools';
import {
    ThemeShadowFn,
    ThemeSpacingFn,
    ThemeTransitionCreateFn,
} from './types';

const SPACE_PIXELS_VALUE = 8;
const ANIMATION_DURATION = '0.2s';

export const valueFromProp = (prop: number | string): number | string =>
    typeof prop === 'number' ? prop * SPACE_PIXELS_VALUE : prop;

export const spacing: ThemeSpacingFn = (spaceV, spaceH) =>
    spaceH !== null && spaceH !== undefined
        ? `${spaceV * SPACE_PIXELS_VALUE}px ${spaceH * SPACE_PIXELS_VALUE}px`
        : `${valueFromProp(spaceV)}px`;

export const shadow: ThemeShadowFn = (color = 'darkgray', elevation = 1) =>
    `0px ${elevation * 0.4}px ${elevation * 3.2}px ${alpha(color, 0.5)}`;

export const createTransition: ThemeTransitionCreateFn = (
    props,
    timingFunction
) => {
    if (Array.isArray(props)) {
        return props
            .map((p) => `${p} ${ANIMATION_DURATION} ${timingFunction}`)
            .join(',');
    }
    return `${props} ${ANIMATION_DURATION} ${timingFunction}`;
};

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

export const getStylesFromColor = (
    theme: Theme,
    { bg, color }: ColorProps
): CSSProperties => ({
    ...(bg && { backgroundColor: getColorFromThemeColor(theme, bg) }),
    ...(color && { color: getColorFromThemeColor(theme, color) }),
});

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
    ...(m && { margin: valueFromProp(m) }),
    ...(mt && { marginTop: valueFromProp(mt) }),
    ...(mr && { marginRight: valueFromProp(mr) }),
    ...(mb && { marginBottom: valueFromProp(mb) }),
    ...(ml && { marginLeft: valueFromProp(ml) }),
    ...(mx && {
        marginLeft: valueFromProp(mx),
        marginRight: valueFromProp(mx),
    }),
    ...(my && {
        marginTop: valueFromProp(my),
        marginBottom: valueFromProp(my),
    }),
    ...(p && { padding: valueFromProp(p) }),
    ...(pt && { paddingTop: valueFromProp(pt) }),
    ...(pr && { paddingRight: valueFromProp(pr) }),
    ...(pb && { paddingBottop: valueFromProp(pb) }),
    ...(pl && { paddingLeft: valueFromProp(pl) }),
    ...(px && {
        paddingLeft: valueFromProp(px),
        paddingRight: valueFromProp(px),
    }),
    ...(py && {
        paddingTop: valueFromProp(py),
        paddingBottom: valueFromProp(py),
    }),
});

export const getStylesFromSize = ({ w, h }: SizeProps): CSSProperties => ({
    ...(w && { width: w }),
    ...(h && { height: h }),
});

export const getStylesFromProps = (
    theme: Theme,
    props: ColorProps & SizeProps & SpaceProps
): CSSProperties => ({
    ...getStylesFromColor(theme, props),
    ...getStylesFromSpace(props),
    ...getStylesFromSize(props),
});
