import {JazzyProvider} from '../src/provider';
import theme from '../src/styles/theme';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
    // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
};

export const decorators = [
    (Story) => <JazzyProvider theme={theme}>{Story()}</JazzyProvider>
]
