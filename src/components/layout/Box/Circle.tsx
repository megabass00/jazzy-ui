import styled from '@emotion/styled';
import React, { FC, ReactNode } from 'react';

import Box, { BoxProps } from './Box';

const CustomBox = styled(Box)({
    '& > svg': {
        height: '70%',
    },
});

export type CircleProps = Omit<BoxProps, 'w' | 'h' | 'radius'> & {
    children: ReactNode;
    size?: BoxProps['w'];
};
const Circle: FC<CircleProps> = ({ size = 2, ...rest }) => (
    <CustomBox w={size} h={size} radius={9999} {...rest} />
);
Circle.displayName = 'Circle';

export default Circle;
