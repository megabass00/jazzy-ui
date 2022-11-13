import React, { ReactNode, SVGProps, FC } from 'react';

interface SvgBaseProps extends SVGProps<SVGSVGElement> {
    children: ReactNode;
}

const SvgBase: FC<SvgBaseProps> = ({ children, ...rest }) => (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...rest}>
        {children}
    </svg>
);

export default SvgBase;
