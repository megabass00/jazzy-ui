import styled from '@emotion/styled';

import { getColorFromThemeColor, getStylesFromSpace } from '../../../styles';
import { JazzyColor, SpaceProps, spacePros } from '../../../typings';

const getRepeat = (columns: number, autoColumns: boolean): string =>
    `repeat(${columns}, ${autoColumns ? 'auto' : '1fr'})`;

type GridContainerDirection = 'row' | 'column';
type GridColor = JazzyColor;
type GridAlignment =
    | 'auto'
    | 'normal'
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline';

const PROPS_SHOULD_BE_HIDDEN = [
    ...spacePros,
    'direction',
    'columns',
    'spacing',
    'columnSpacing',
    'rowSpacing',
    'autoColumns',
    'colSpan',
    'rowSpan',
    'xAlign',
    'yAlign',
    'bg',
    'color',
];

export interface GridProps {
    columns?: number;
    columnSpacing?: number;
    rowSpacing?: number;
    spacing?: number;
    direction?: GridContainerDirection;
    autoColumns?: boolean;
}

const Grid = styled('div', {
    shouldForwardProp: (prop) => !PROPS_SHOULD_BE_HIDDEN.includes(prop),
    label: 'grid',
})<GridProps>(
    ({
        theme,
        columns = 12,
        columnSpacing = 3,
        rowSpacing = 3,
        spacing,
        direction = 'row',
        autoColumns = false,
    }) => {
        return {
            display: 'grid',
            ...(direction === 'row'
                ? {
                      gridTemplateColumns: getRepeat(columns, autoColumns),
                  }
                : {
                      gridTemplateRows: getRepeat(columns, autoColumns),
                      '& > *': {
                          width: '100%',
                      },
                  }),
            columnGap: theme.spacing(spacing || columnSpacing),
            rowGap: theme.spacing(spacing || rowSpacing),
            width: '100%',
        };
    }
);

export type GridItemProps = SpaceProps & {
    colSpan?: number;
    rowSpan?: number;
    xAlign?: GridAlignment;
    yAlign?: GridAlignment;
    bg?: GridColor;
    color?: GridColor;
};

export const GridItem = styled('div', {
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
        ...(xAlign !== 'stretch' && { width: '100%' }),
        ...(bg && { backgroundColor: getColorFromThemeColor(theme, bg) }),
        ...(color && { color: getColorFromThemeColor(theme, color) }),
        ...getStylesFromSpace(rest),
    })
);

export default Grid;
