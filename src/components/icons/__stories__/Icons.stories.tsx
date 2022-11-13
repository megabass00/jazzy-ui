import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { colorControl, icons, numberControl } from '../../../utils';
import { Box, Grid, GridItem } from '../../layout';
import { SvgBase } from '../svg';

const colorOptions = ['gray', 'tomato', '#76b5c5', '#c576b5', '#b5c576'];

export default {
    title: 'Icons/List',
    component: SvgBase,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        ...numberControl('width', 'range', { min: 0, max: 50, step: 1 }),
        ...colorControl('color', { presets: colorOptions }),
    },
} as ComponentMeta<typeof SvgBase>;

export const AllIcons: ComponentStory<typeof SvgBase> = (args) => (
    <Grid columns={18}>
        {icons.map((Icon) => (
            <GridItem p={1}>
                <Box>
                    <Icon {...args} />
                </Box>
            </GridItem>
        ))}
    </Grid>
);
AllIcons.args = {
    width: 30,
    color: 'gray',
};
