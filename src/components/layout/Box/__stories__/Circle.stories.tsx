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
import Circle from '../Circle';

export default {
    title: 'Layout/Circle',
    component: Circle,
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
} as ComponentMeta<typeof Circle>;

export const ExampleWithIcon: ComponentStory<typeof Circle> = (args) => (
    <Circle {...args}>
        <Phone />
    </Circle>
);
ExampleWithIcon.args = {
    size: 150,
    xAlign: 'center',
    yAlign: 'center',
    bg: 'primary',
    color: '#ffffff',
    ...defaultSpaceArgValues,
};

export const ExampleWithText: ComponentStory<typeof Circle> = (args) => (
    <Circle {...args}>Circle Content</Circle>
);
ExampleWithText.args = {
    size: 150,
    xAlign: 'center',
    yAlign: 'center',
    bg: 'primary',
    color: '#ffffff',
    ...defaultSpaceArgValues,
};
