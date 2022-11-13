import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React, { CSSProperties, FC, ReactNode } from 'react';

import { getStylesFromProps } from '../../../styles';
import {
    ColorProps,
    colorProps,
    SizeProps,
    sizeProps,
    SpaceProps,
    spaceProps,
} from '../../../typings';

const PROPS_SHOULD_BE_HIDDEN = [
    'radius',
    'xAlign',
    'yAlign',
    'textAlign',
    ...spaceProps,
    ...sizeProps,
    ...colorProps,
] as string[];

export type BoxAlignment = 'start' | 'center' | 'end';

export type BoxProps = ColorProps &
    SpaceProps &
    SizeProps & {
        children: ReactNode;
        radius?: number;
        xAlign?: BoxAlignment;
        yAlign?: BoxAlignment;
    };

const getTextAlign = (xAlign: BoxAlignment): CSSProperties['textAlign'] => {
    switch (xAlign) {
        case 'start':
            return 'left';
        case 'end':
            return 'right';
        case 'center':
        default:
            return 'center';
    }
};

const BaseBox = styled('div', {
    shouldForwardProp: (prop) => !PROPS_SHOULD_BE_HIDDEN.includes(prop),
})<BoxProps>(
    ({ theme, radius, xAlign = 'center', yAlign = 'center', ...rest }) => ({
        ...(radius && { borderRadius: radius }),
        display: 'flex',
        justifyContent: xAlign,
        alignItems: yAlign,
        textAlign: getTextAlign(xAlign),
        ...getStylesFromProps(theme, rest),
    })
);

const Box: FC<BoxProps> = (props) => {
    const theme = useTheme();
    return <BaseBox color={theme.palette.text.main} {...props} />;
};
Box.displayName = 'Box';

export default Box;
