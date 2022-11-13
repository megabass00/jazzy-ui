import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';

import { getColorFromThemeColor, getStylesFromSpace } from '../../../styles';
import { SpaceProps, spaceProps } from '../../../typings';
import { GridAlignment, GridColor } from './types';

const PROPS_SHOULD_BE_HIDDEN = [
    ...spaceProps,
    'colSpan',
    'rowSpan',
    'xAlign',
    'yAlign',
    'bg',
    'color',
];

export type GridItemProps = SpaceProps & {
    children?: ReactNode;
    colSpan?: number;
    rowSpan?: number;
    xAlign?: GridAlignment;
    yAlign?: GridAlignment;
    bg?: GridColor;
    color?: GridColor;
};

const BaseGridItem = styled('div', {
    shouldForwardProp: (prop) => !PROPS_SHOULD_BE_HIDDEN.includes(prop),
})<GridItemProps>(
    ({
        theme,
        colSpan = 1,
        rowSpan = 1,
        xAlign = 'stretch',
        yAlign = 'stretch',
        bg,
        color,
        ...rest
    }) => ({
        gridColumnStart: `span ${colSpan}`,
        gridRowStart: `span ${rowSpan}`,
        justifySelf: xAlign,
        alignSelf: yAlign,
        // ...(xAlign !== 'stretch' && { width: '100%' }),
        ...(bg && { backgroundColor: getColorFromThemeColor(theme, bg) }),
        ...(color && { color: getColorFromThemeColor(theme, color) }),
        ...getStylesFromSpace(rest),
    })
);
const GridItem: FC<GridItemProps> = (props) => <BaseGridItem {...props} />;

GridItem.displayName = 'GridItem';

export default GridItem;
