import React, { SVGProps, FC } from 'react';

import SvgBase from './SvgBase';

const ArrowDropRight: FC<SVGProps<SVGSVGElement>> = (props) => (
    <SvgBase viewBox="0 0 24 24" {...props}>
        <path d="m10 17 5-5-5-5v10z"></path>
    </SvgBase>
);

export default ArrowDropRight;
