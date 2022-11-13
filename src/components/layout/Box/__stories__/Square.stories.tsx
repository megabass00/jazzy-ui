import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Phone } from '../../../../components/icons';
import {
    alignOptions,
    colorThemeOptions,
    defaultSpaceArgs,
    defaultSpaceArgValues,
    enumControl,
    numberControl,
} from '../../../../utils';
import Square from '../Square';

export default {
    title: 'Layout/Square',
    component: Square,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        ...numberControl('size', 'range', { min: 0, max: 400, step: 1 }),
        ...enumControl('xAlign', 'radio', alignOptions),
        ...enumControl('yAlign', 'radio', alignOptions),
        ...enumControl('bg', 'select', colorThemeOptions),
        ...enumControl('color', 'select', colorThemeOptions),
        ...defaultSpaceArgs,
    },
} as ComponentMeta<typeof Square>;

export const ExampleWithIcon: ComponentStory<typeof Square> = (args) => (
    <Square {...args}>
        <Phone />
    </Square>
);
ExampleWithIcon.args = {
    size: 150,
    xAlign: 'center',
    yAlign: 'center',
    bg: 'primary',
    color: '#ffffff',
    ...defaultSpaceArgValues,
};

export const ExampleWithText: ComponentStory<typeof Square> = (args) => (
    <Square {...args}>Square Content</Square>
);
ExampleWithText.args = {
    size: 150,
    xAlign: 'center',
    yAlign: 'center',
    bg: 'primary',
    color: '#ffffff',
    ...defaultSpaceArgValues,
};
