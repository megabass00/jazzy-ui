import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import {
    alignOptions,
    colorThemeOptions,
    defaultSpaceArgs,
    defaultSpaceArgValues,
    enumControl,
} from '../../../../utils';
import Grid from '../Grid';
import GridItem from '../GridItem';

export default {
    title: 'Layout/Grid/GridItem',
    component: GridItem,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        ...enumControl('bg', 'select', colorThemeOptions),
        ...enumControl('color', 'select', colorThemeOptions),
        ...enumControl('xAlign', 'select', alignOptions),
        ...enumControl('yAlign', 'select', alignOptions),
        ...defaultSpaceArgs,
    },
} as ComponentMeta<typeof GridItem>;

const Template: ComponentStory<typeof GridItem> = (args) => (
    <Grid columns={8}>
        <GridItem {...args}>Grid Item Example</GridItem>
        {[1, 2, 3, 4, 5, 6, 7].map((number) => (
            <GridItem key={number} bg="primary" p={1}>
                Grid Item
            </GridItem>
        ))}
    </Grid>
);
export const Example = Template.bind({});
Example.args = {
    colSpan: 1,
    rowSpan: 1,
    bg: 'primary',
    color: '#ffffff',
    xAlign: 'stretch',
    yAlign: 'stretch',
    ...defaultSpaceArgValues,
};
