import { MENU } from '../../model/data';
import { GenreMenu } from '../GenreMenu/GenreMenu';
import { Menu } from '../Menu/Menu';

import { ReturnComponentType } from 'shared/types';

export const MenuContainer = (): ReturnComponentType => {
    return (
        <div>
            <Menu menu={MENU[0]} />
            <GenreMenu />
            {/*<Menu menu={userMenu} />*/}
        </div>
    );
};
