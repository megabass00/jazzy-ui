import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { JazzyColor } from '../../../../typings';
import {
    colorThemeOptions,
    directionOptions,
    enumControl,
    numberControl,
} from '../../../../utils';
import Grid from '../Grid';
import GridItem from '../GridItem';

export default {
    title: 'Layout/Grid/Grid',
    component: Grid,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    argTypes: {
        ...numberControl('columns', 'range', { min: 0, max: 25, step: 1 }),
        ...enumControl('direction', 'inline-radio', directionOptions),
    },
} as ComponentMeta<typeof Grid>;

const TEST_COLORS: JazzyColor[] = [...colorThemeOptions];

export const Example: ComponentStory<typeof Grid> = (args) => (
    <Grid {...args}>
        {[...TEST_COLORS, ...TEST_COLORS, ...TEST_COLORS].map(
            (color, index) => (
                <GridItem key={index} bg={color} p={2} color="#FFFFFF">
                    {color}
                </GridItem>
            )
        )}
    </Grid>
);
Example.args = {
    columns: 6,
    spacing: 1,
    rowSpacing: 2,
    columnSpacing: 2,
    direction: 'row',
    autoColumns: false,
};
