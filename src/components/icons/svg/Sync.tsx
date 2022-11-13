import React, { SVGProps, FC } from 'react';

import SvgBase from './SvgBase';

const Sync: FC<SVGProps<SVGSVGElement>> = (props) => (
    <SvgBase viewBox="0 0 24 24" {...props}>
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
    </SvgBase>
);

export default Sync;
