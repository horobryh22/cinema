import { ReactNode } from 'react';

import type { LinkProps } from 'next/link';
import Link from 'next/link';

import { classNames } from '../../lib/classNames/classNames';
import { ReturnComponentType } from '../../types';

import classes from './AppLink.module.scss';

export enum LINK_THEME {
    DEFAULT = 'default',
    BUTTON = 'button',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
    theme?: LINK_THEME;
}

export const AppLink = (props: AppLinkProps): ReturnComponentType => {
    const { className = '', children, theme = LINK_THEME.DEFAULT, ...restProps } = props;

    return (
        <Link {...restProps}>
            <a
                className={classNames(classes.AppLink, {}, [
                    classes[className],
                    classes[theme],
                ])}
            >
                {children}
            </a>
        </Link>
    );
};
