import React, { SVGProps, FC } from 'react';

import SvgBase from './SvgBase';

const ArrowRight: FC<SVGProps<SVGSVGElement>> = (props) => (
    <SvgBase viewBox="0 0 24 24" {...props}>
        <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
    </SvgBase>
);

export default ArrowRight;
