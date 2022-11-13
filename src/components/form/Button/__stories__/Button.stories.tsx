import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Phone, Plus, Headphones } from '../../../../components/icons';
import { Grid, GridItem } from '../../../../components/layout';
import { JazzyVariant } from '../../../../typings/color';
import {
    colorControl,
    colorThemeOptions,
    enumControl,
} from '../../../../utils';
import Button from '../Button';

export default {
    title: 'Form/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        ...enumControl('variant', 'select'),
        ...colorControl('color'),
        ...enumControl('textTransform', 'inline-radio'),
    },
} as ComponentMeta<typeof Button>;

export const BasicExample: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>Test button</Button>
);
BasicExample.args = {
    variant: 'solid',
    color: '#d88353',
    fullWidth: false,
    rounded: false,
    disabled: false,
    textTransform: 'none',
    onClick: action('onClick'),
};

export const ExampleWithIcon: ComponentStory<typeof Button> = (args) => (
    <Button {...args} LeftIcon={Plus} RightIcon={Phone}>
        Test Button
    </Button>
);
ExampleWithIcon.args = {
    ...BasicExample.args,
};

const samplerColors = [
    ...colorThemeOptions,
    '#76b5c5',
    '#25557d',
    '#c576b5',
    '#b5c576',
];

export const Sampler: ComponentStory<typeof Button> = (args) => (
    <Grid columns={10} columnSpacing={0} rowSpacing={1}>
        {(['solid', 'outline', 'ghost', 'link'] as JazzyVariant[]).map(
            (variant) =>
                samplerColors.map((color) => (
                    <GridItem>
                        <Button
                            {...args}
                            color={color}
                            LeftIcon={Headphones}
                            variant={variant}
                        >
                            Test button
                        </Button>
                    </GridItem>
                ))
        )}
    </Grid>
);
Sampler.args = {
    fullWidth: false,
    rounded: false,
    disabled: false,
    textTransform: 'capitalize',
    onClick: action('onClick'),
};
