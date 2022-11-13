import React, { SVGProps, FC } from 'react';

import SvgBase from './SvgBase';

const Menu: FC<SVGProps<SVGSVGElement>> = (props) => (
    <SvgBase viewBox="0 0 24 24" {...props}>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </SvgBase>
);

export default Menu;
