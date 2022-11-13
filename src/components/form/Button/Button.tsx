import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React, {
    ComponentType,
    FC,
    MouseEvent,
    ReactNode,
    SVGProps,
} from 'react';

import { darken, lighten } from '../../../styles/colorTools';
import { getColorFromThemeColor } from '../../../styles/utils';
import { JazzyColor, JazzyVariant } from '../../../typings/color';

const PROPS_SHOULD_BE_HIDDEN = [
    'variant',
    'fullWidth',
    'rounded',
    'disabled',
    'Icon',
    'textTransform',
];

type ButtonBaseProps = Pick<
    ButtonProps,
    'variant' | 'color' | 'fullWidth' | 'disabled' | 'textTransform' | 'rounded'
>;
const ButtonBase = styled('button', {
    shouldForwardProp: (prop: string) => !PROPS_SHOULD_BE_HIDDEN.includes(prop),
})<ButtonBaseProps>(
    ({
        theme,
        variant = 'solid',
        color = 'primary',
        fullWidth = false,
        rounded = false,
        disabled = false,
        textTransform = 'none',
    }) => {
        const calculatedColor = disabled
            ? theme.palette.grey[500]
            : getColorFromThemeColor(theme, color);
        return {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform,
            outline: 'none',
            cursor: disabled ? 'default' : 'pointer',
            padding: theme.spacing(1, 2),
            width: fullWidth ? '-webkit-fill-available' : 'fit-content',
            '& svg:first-of-type': {
                marginRight: theme.spacing(1),
            },
            '& svg:last-of-type': {
                marginLeft: theme.spacing(1),
            },
            transition: theme.transition.create(
                ['background-color', 'color', 'fill', 'opacity'],
                'ease-in'
            ),
            borderRadius: rounded ? 9999 : theme.spacing(0.5),
            ...(variant === 'solid' && {
                color: 'white',
                backgroundColor: calculatedColor,
                border: 'none',
                '&:hover': {
                    backgroundColor: darken(calculatedColor, 0.15),
                },
            }),
            ...(variant === 'outline' && {
                color: calculatedColor,
                border: `1px solid ${calculatedColor}`,
                backgroundColor: 'transparent',
                '&:hover': {
                    backgroundColor: lighten(calculatedColor, 0.9),
                },
            }),
            ...(variant === 'ghost' && {
                color: calculatedColor,
                border: 'none',
                backgroundColor: 'transparent',
                '&:hover': {
                    backgroundColor: lighten(calculatedColor, 0.9),
                },
            }),
            ...(variant === 'link' && {
                color: calculatedColor,
                border: 'none',
                backgroundColor: 'transparent',
                '&:hover': {
                    textDecoration: 'underline',
                },
            }),
            ...(disabled && { opacity: 0.7, pointerEvents: 'none' }),
        };
    }
);

type ButtonVariant = JazzyVariant | 'ghost' | 'link';
type ButtonColor = JazzyColor;
type ButtonTextTransform = 'lowercase' | 'uppercase' | 'capitalize' | 'none';
export type ButtonProps = {
    children: ReactNode;
    variant?: ButtonVariant;
    color?: ButtonColor;
    rounded?: boolean;
    fullWidth?: boolean;
    LeftIcon?: ComponentType<SVGProps<SVGSVGElement>>;
    RightIcon?: ComponentType<SVGProps<SVGSVGElement>>;
    disabled?: boolean;
    textTransform?: ButtonTextTransform;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
const Button: FC<ButtonProps> = ({
    children,
    LeftIcon,
    RightIcon,
    ...rest
}) => {
    const theme = useTheme();
    return (
        <ButtonBase {...rest}>
            {LeftIcon && <LeftIcon width={theme.spacing(2)} />}
            {children}
            {RightIcon && <RightIcon width={theme.spacing(2)} />}
        </ButtonBase>
    );
};
Button.displayName = 'Button';

export default Button;
