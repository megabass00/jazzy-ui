import React, { SVGProps, FC } from 'react';

import SvgBase from './SvgBase';

const ArrowDropLeft: FC<SVGProps<SVGSVGElement>> = (props) => (
    <SvgBase viewBox="0 0 24 24" {...props}>
        <path d="m14 7-5 5 5 5V7z"></path>
    </SvgBase>
);

export default ArrowDropLeft;
