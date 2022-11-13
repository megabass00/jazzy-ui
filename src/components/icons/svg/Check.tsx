import React, { SVGProps, FC } from 'react';

import SvgBase from './SvgBase';

const Check: FC<SVGProps<SVGSVGElement>> = (props) => (
    <SvgBase viewBox="0 0 24 24" {...props}>
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
    </SvgBase>
);

export default Check;
