import { lighten, darken } from './colorTools';
import { Theme, ThemeColor } from './types';
import { spacing, shadow } from './utils';

export const BREAKPOINTS = {
    extraSmall: 320,
    mobile: 576,
    tablet: 768,
    laptop: 992,
    desktop: 1200,
};

export const ZINDEX = {
    base: 100,
    carousel: 200,
    popUp: 300,
    navBar: 400,
    popper: 500,
    spinner: 600,
};

const COLOR_OFFSETTING = 0.3;
const COLOR__HARD_OFFSETTING = 0.6;

const brandColors = {
    primary: '#6380F7',
    secondary: '#03DAC4',
};

const feedbackColors = {
    info: '#0077C8',
    success: '#00B388',
    warning: '#F6BE00',
    error: '#D20028',
};

const textColor = '#1F2329';

const greyColors = {
    50: '#FFFFFF',
    100: '#F8F9FB',
    200: '#EEF1F6',
    300: '#E4E8EE',
    400: '#CDD3DD',
    500: '#A8B1BD',
    600: '#6A7381',
    700: '#49505A',
    800: '#1F2329',
    900: '#121417',
};

const createColor = (color: string): ThemeColor => ({
    main: color,
    light: lighten(color, COLOR_OFFSETTING),
    dark: darken(color, COLOR_OFFSETTING),
    extralight: lighten(color, COLOR__HARD_OFFSETTING),
    extradark: darken(color, COLOR__HARD_OFFSETTING),
});

const theme: Theme = {
    palette: {
        brand: {
            primary: createColor(brandColors.primary),
            secondary: createColor(brandColors.secondary),
        },
        feedback: {
            success: createColor(feedbackColors.success),
            info: createColor(feedbackColors.info),
            warning: createColor(feedbackColors.warning),
            error: createColor(feedbackColors.error),
        },
        grey: greyColors,
        text: createColor(textColor),
        gradient: {
            main: 'linear-gradient(68.85deg, #1B1E20 0%, rgba(27, 30, 32, 0) 64.05%);',
            hover: 'linear-gradient(135deg, rgba(27, 30, 32, 0.5) 0%, #1B1E20 100%);',
        },
    },
    mediaquery: {
        mobile: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
        tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
        desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
    },
    typography: {
        fonts: {
            bold: '/assets/fonts/Rubik-Bold.ttf',
            italic: '/assets/fonts/Rubik-Italic.ttf',
            regular: '/assets/fonts/Rubik-Regular.ttf',
            semibold: '/assets/fonts/Rubik-SemiBold.ttf',
        },
    },
    spacing,
    shadow,
};

export default theme;
