import React, { SVGProps, FC } from 'react';

import SvgBase from './SvgBase';

const ArrowUp: FC<SVGProps<SVGSVGElement>> = (props) => (
    <SvgBase viewBox="0 0 24 24" {...props}>
        <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"></path>
    </SvgBase>
);

export default ArrowUp;
