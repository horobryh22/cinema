import classes from './Sidebar.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps): ReturnComponentType => {
    return (
        <div className={classNames(classes.Sidebar, {}, [classes[className!]])}>
            Sidebar
        </div>
    );
};
