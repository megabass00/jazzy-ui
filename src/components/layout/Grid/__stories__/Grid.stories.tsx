import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Grid, { GridItem } from '../Grid';

export default {
    title: 'Example/Grid',
    component: Grid,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Grid>;

const TEST_COLORS = ['primary', 'success', 'info', 'warning', 'error'];

export const TemplateColumns: ComponentStory<typeof Grid> = (args) => (
    <Grid {...args}>
        {[...TEST_COLORS, ...TEST_COLORS, ...TEST_COLORS].map(
            (color, index) => (
                <GridItem key={index} bg={color} p={2}>
                    {color}
                </GridItem>
            )
        )}
    </Grid>
);
TemplateColumns.args = {
    columns: 5,
    spacing: 1,
    rowSpacing: 2,
    columnSpacing: 2,
    direction: 'row',
    autoColumns: false,
};

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;
export const ColumnSpan = Template.bind({});
ColumnSpan.args = {
    columns: 5,
};

export const GridItemExample: ComponentStory<typeof GridItem> = (args) => (
    <Grid columns={1}>
        <GridItem {...args}>Test Content</GridItem>
    </Grid>
);
GridItemExample.args = {
    colSpan: 1,
    rowSpan: 1,
    xAlign: 'center',
    yAlign: 'center',
    bg: 'primary',
    color: '#ffffff',
    p: 1,
};
