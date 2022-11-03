import { GenreMenu } from '../GenreMenu/GenreMenu';

import { IMenu, Menu } from 'entities/Menu';
import { ReturnComponentType } from 'shared/types';

export const MAIN_MENU: IMenu = {
    title: 'Menu',
    items: [
        { title: 'Home', icon: 'MdHome', link: '/' },
        { title: 'Discovery', icon: 'MdExplore', link: '/genres' },
        { title: 'Fresh movies', icon: 'MdRefresh', link: '/fresh' },
        { title: 'Trending now', icon: 'MdLocalFireDepartment', link: '/trending' },
    ],
};

export const MenuContainer = (): ReturnComponentType => {
    return (
        <div>
            <Menu menu={MAIN_MENU} />
            <GenreMenu />
            {/*<Menu menu={userMenu} />*/}
        </div>
    );
};
