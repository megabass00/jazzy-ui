import React, { SVGProps, FC } from 'react';

import SvgBase from './SvgBase';

const Bookmark: FC<SVGProps<SVGSVGElement>> = (props) => (
    <SvgBase viewBox="0 0 24 24" {...props}>
        <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V5h10v13z"></path>
    </SvgBase>
);

export default Bookmark;
