import { ButtonHTMLAttributes, ReactElement } from 'react';

import { classNames, Mods } from '../../lib/classNames/classNames';

import classes from './Button.module.scss';

export enum ButtonTheme {
    PRIMARY = 'primary',
    CIRCLE = 'circle',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export enum ButtonWidth {
    NONE = 'none',
    FULL = 'full-w',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    width?: ButtonWidth;
    disabled?: boolean;
}

export const Button = (props: ButtonProps): ReactElement => {
    const {
        children,
        className = '',
        width = ButtonWidth.NONE,
        theme = ButtonTheme.PRIMARY,
        size = ButtonSize.M,
        disabled = false,
        ...restProps
    } = props;

    const mods: Mods = {
        [classes.disabled]: disabled,
    };

    return (
        <button
            type="button"
            {...restProps}
            disabled={disabled}
            className={classNames(classes.Button, mods, [
                className,
                classes[theme],
                classes[size],
                classes[width],
            ])}
        >
            {children}
        </button>
    );
};
