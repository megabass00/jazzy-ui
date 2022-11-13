import styled from '@emotion/styled';
import React, { FC } from 'react';

import Box, { BoxProps } from '../Box';

const PROPS_SHOULD_BE_HIDDEN = ['elevation'] as string[];

const PaperBase = styled(Box, {
    shouldForwardProp: (prop) => !PROPS_SHOULD_BE_HIDDEN.includes(prop),
})<Pick<PaperProps, 'elevation'>>(({ theme, elevation = 1 }) => ({
    boxShadow: theme.shadow(theme.palette.grey[800], elevation),
}));

export type PaperProps = BoxProps & {
    elevation?: number;
};

const Paper: FC<PaperProps> = ({
    xAlign = 'start',
    yAlign = 'start',
    p = 1,
    h = '100%',
    bg = 'white',
    ...rest
}) => (
    <PaperBase {...rest} bg={bg} xAlign={xAlign} yAlign={yAlign} p={p} h={h} />
);
Paper.displayName = 'Paper';

export default Paper;
