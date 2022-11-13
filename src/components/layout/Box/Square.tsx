import styled from '@emotion/styled';
import React, { FC, ReactNode } from 'react';

import Box, { BoxProps } from './Box';

const CustomBox = styled(Box)({
    '& > svg': {
        height: '80%',
    },
});

export type SquareProps = Omit<BoxProps, 'w' | 'h' | 'radius'> & {
    children: ReactNode;
    size?: BoxProps['w'];
};
const Square: FC<SquareProps> = ({ size = 2, ...rest }) => (
    <CustomBox w={size} h={size} {...rest} />
);
Square.displayName = 'Square';

export default Square;
