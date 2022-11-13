import React, { SVGProps, FC } from 'react';

import SvgBase from './SvgBase';

const ArrowDown: FC<SVGProps<SVGSVGElement>> = (props) => (
    <SvgBase viewBox="0 0 24 24" {...props}>
        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
    </SvgBase>
);

export default ArrowDown;
