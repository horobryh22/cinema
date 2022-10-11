import { MENU } from '../../data';
import { Menu } from '../Menu/Menu';

import classes from './MenuContainer.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';

interface IMenuContainer {
    className?: string;
}

export const MenuContainer = ({ className }: IMenuContainer): ReturnComponentType => {
    return (
        <div className={classNames(classes.MenuContainer, {}, [classes[className!]])}>
            <Menu menu={MENU[0]} />
            {/*<Menu menu={genresMenu} />*/}
            {/*<Menu menu={userMenu} />*/}
        </div>
    );
};
