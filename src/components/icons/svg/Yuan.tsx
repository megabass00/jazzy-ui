import React, { SVGProps, FC } from 'react';

import SvgBase from './SvgBase';

const Yuan: FC<SVGProps<SVGSVGElement>> = (props) => (
    <SvgBase viewBox="0 0 24 24" {...props}>
        <path d="M13.28 12H18v2h-5v7h-2v-7H6v-2h4.72L5 3h2.37L12 10.29 16.63 3H19z"></path>
    </SvgBase>
);

export default Yuan;
