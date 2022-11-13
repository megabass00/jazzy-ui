import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';

import { GridContainerDirection } from './types';

const getRepeat = (columns: number, autoColumns: boolean): string =>
    `repeat(${columns}, ${autoColumns ? 'auto' : '1fr'})`;

const PROPS_SHOULD_BE_HIDDEN = [
    'direction',
    'columns',
    'spacing',
    'columnSpacing',
    'rowSpacing',
    'autoColumns',
];

export interface GridProps {
    children: ReactNode;
    columns?: number;
    columnSpacing?: number;
    rowSpacing?: number;
    spacing?: number;
    direction?: GridContainerDirection;
    autoColumns?: boolean;
}

const BaseGrid = styled('div', {
    shouldForwardProp: (prop) => !PROPS_SHOULD_BE_HIDDEN.includes(prop),
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

const Grid: FC<GridProps> = (props) => <BaseGrid {...props} />;
Grid.displayName = 'Grid';

export default Grid;
