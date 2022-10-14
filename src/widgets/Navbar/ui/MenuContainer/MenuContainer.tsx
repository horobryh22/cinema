import { MENU } from '../../data';
import { Menu } from '../Menu/Menu';

import classes from './MenuContainer.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { usePopularGenres } from 'widgets/Navbar/lib/usePopularGenres/usePopularGenres';

interface IMenuContainer {
    className?: string;
}

export const MenuContainer = ({ className }: IMenuContainer): ReturnComponentType => {
    const { genres } = usePopularGenres();

    return (
        <div className={classNames(classes.MenuContainer, {}, [classes[className!]])}>
            <Menu menu={MENU[0]} />
            <Menu menu={{ title: 'Popular genres', items: genres }} />
            {/*<Menu menu={userMenu} />*/}
        </div>
    );
};
