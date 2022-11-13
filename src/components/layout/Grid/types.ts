import { JazzyColor } from '../../../typings';

export type GridContainerDirection = 'row' | 'column';
export type GridColor = JazzyColor;
export type GridAlignment =
    | 'auto'
    | 'normal'
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline';
