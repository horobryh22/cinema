import { ReactNode } from 'react';

import classes from './Layout.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

interface ILayout {
    className?: string;
    children?: ReactNode;
}

export const Layout = ({ className = '', children }: ILayout): ReturnComponentType => {
    return (
        <div className={classNames(classes.Layout, {}, [classes[className]])}>
            <Navbar />
            <div className={classes.content}>{children}</div>
            <Sidebar />
        </div>
    );
};
