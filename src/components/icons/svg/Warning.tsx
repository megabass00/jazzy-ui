import React, { SVGProps, FC } from 'react';

import SvgBase from './SvgBase';

const Warning: FC<SVGProps<SVGSVGElement>> = (props) => (
    <SvgBase viewBox="0 0 24 24" {...props}>
        <circle cx="12" cy="19" r="2"></circle>
        <path d="M10 3h4v12h-4z"></path>
    </SvgBase>
);

export default Warning;
