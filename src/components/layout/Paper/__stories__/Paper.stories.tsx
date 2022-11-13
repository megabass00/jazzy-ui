import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import {
    alignOptions,
    colorThemeOptions,
    defaultSpaceArgs,
    defaultSpaceArgValues,
    enumControl,
    numberControl,
} from '../../../../utils';
import Paper from '../Paper';

export default {
    title: 'Layout/Paper',
    component: Paper,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        ...numberControl('w', 'range', { min: 0, max: 400, step: 1 }),
        ...numberControl('h', 'range', { min: 0, max: 400, step: 1 }),
        ...enumControl('xAlign', 'radio', alignOptions),
        ...enumControl('yAlign', 'radio', alignOptions),
        ...enumControl('bg', 'select', colorThemeOptions),
        ...enumControl('color', 'select', colorThemeOptions),
        ...defaultSpaceArgs,
    },
} as ComponentMeta<typeof Paper>;

const Container = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
}));

export const BasicExample: ComponentStory<typeof Paper> = (args) => (
    <Container>
        <Paper {...args}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            laudantium voluptatem, quae necessitatibus, id perferendis veniam ad
            reiciendis at, ea ducimus harum nostrum aliquid atque est. Cum,
            minima quia. Repudiandae inventore, dolorem cum sunt natus eos!
            Velit modi provident officia magni est aut, harum pariatur
            consequatur. Delectus earum minus cum nobis voluptates incidunt
            error, aspernatur porro quisquam reprehenderit fugit officia.
        </Paper>
    </Container>
);
BasicExample.args = {
    w: undefined,
    h: undefined,
    elevation: 2,
    xAlign: 'start',
    yAlign: 'start',
    bg: 'white',
    color: 'darkgray',
    ...defaultSpaceArgValues,
    ...{ p: 2 },
};
