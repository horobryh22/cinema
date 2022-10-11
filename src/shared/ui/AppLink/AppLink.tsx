import { ReactNode } from 'react';

import type { LinkProps } from 'next/link';
import Link from 'next/link';

import classes from './AppLink.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
}

export const AppLink = (props: AppLinkProps): ReturnComponentType => {
    const { className, children, ...restProps } = props;

    return (
        <Link {...restProps}>
            <a className={classNames(classes.AppLink, {}, [classes[className!]])}>
                {children}
            </a>
        </Link>
    );
};
