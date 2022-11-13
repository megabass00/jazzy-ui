import React, { SVGProps, FC } from 'react';

import SvgBase from './SvgBase';

const ChatBubble: FC<SVGProps<SVGSVGElement>> = (props) => (
    <SvgBase viewBox="0 0 24 24" {...props}>
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"></path>
    </SvgBase>
);

export default ChatBubble;
