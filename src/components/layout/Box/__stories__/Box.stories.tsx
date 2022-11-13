import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import {
    alignOptions,
    colorThemeOptions,
    defaultSpaceArgs,
    defaultSpaceArgValues,
    enumControl,
    numberControl,
    textAlignOptions,
} from '../../../../utils';
import Box from '../Box';

export default {
    title: 'Layout/Box',
    component: Box,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    argTypes: {
        ...numberControl('w', 'range', { min: 0, max: 400, step: 1 }),
        ...numberControl('h', 'range', { min: 0, max: 400, step: 1 }),
        ...enumControl('xAlign', 'radio', alignOptions),
        ...enumControl('yAlign', 'radio', alignOptions),
        ...enumControl('textAlign', 'radio', textAlignOptions),
        ...enumControl('bg', 'select', colorThemeOptions),
        ...enumControl('color', 'select', colorThemeOptions),
        ...defaultSpaceArgs,
    },
} as ComponentMeta<typeof Box>;

export const Example: ComponentStory<typeof Box> = (args) => (
    <Box {...args}>Box Content</Box>
);
Example.args = {
    w: 300,
    h: 100,
    xAlign: 'center',
    yAlign: 'center',
    bg: 'primary',
    color: '#ffffff',
    radius: 4,
    ...defaultSpaceArgValues,
};

export const ExampleWithLargeText: ComponentStory<typeof Box> = (args) => (
    <Box {...args}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa
        unde nemo debitis, quidem nobis nam error a vitae, hic eos itaque
        doloremque aut quos! Facilis a esse recusandae doloremque aspernatur
        tempore earum labore, architecto sed iure animi omnis quidem autem id
        totam dolorum! Similique iure quo, repudiandae officia perferendis
        exercitationem numquam quod tempore maxime accusamus, est eum nemo?
    </Box>
);
ExampleWithLargeText.args = {
    w: 300,
    h: 100,
    xAlign: 'center',
    yAlign: 'center',
    bg: 'primary',
    color: '#ffffff',
    radius: 4,
    ...defaultSpaceArgValues,
};
