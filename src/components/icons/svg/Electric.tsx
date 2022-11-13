import React, { SVGProps, FC } from 'react';

import SvgBase from './SvgBase';

const Electric: FC<SVGProps<SVGSVGElement>> = (props) => (
    <SvgBase viewBox="0 0 24 24" {...props}>
        <path d="M14.69 2.21 4.33 11.49c-.64.58-.28 1.65.58 1.73L13 14l-4.85 6.76c-.22.31-.19.74.08 1.01.3.3.77.31 1.08.02l10.36-9.28c.64-.58.28-1.65-.58-1.73L11 10l4.85-6.76c.22-.31.19-.74-.08-1.01-.3-.3-.77-.31-1.08-.02z"></path>
    </SvgBase>
);

export default Electric;
