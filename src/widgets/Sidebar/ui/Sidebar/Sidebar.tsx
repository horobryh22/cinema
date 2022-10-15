import { Search } from '../Search/Search';

import classes from './Sidebar.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';

export const Sidebar = (): ReturnComponentType => {
    return (
        <div className={classNames(classes.Sidebar)}>
            <Search />
        </div>
    );
};
