import React, { SVGProps, FC } from 'react';

import SvgBase from './SvgBase';

const Reply: FC<SVGProps<SVGSVGElement>> = (props) => (
    <SvgBase viewBox="0 0 24 24" {...props}>
        <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path>
    </SvgBase>
);

export default Reply;
