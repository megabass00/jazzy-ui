import React, { SVGProps, FC } from 'react';

import SvgBase from './SvgBase';

const ArrowDropDown: FC<SVGProps<SVGSVGElement>> = (props) => (
    <SvgBase viewBox="0 0 24 24" {...props}>
        <path d="m7 10 5 5 5-5H7z"></path>
    </SvgBase>
);

export default ArrowDropDown;
