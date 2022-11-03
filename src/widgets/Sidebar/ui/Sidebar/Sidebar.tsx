import { FavouritesMovies } from '../FavouritesMovies/FavouritesMovies';
import { PopularMovies } from '../PopularMovies/PopularMovies';

import classes from './Sidebar.module.scss';

import { Search } from 'features/Search';
import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';

export const Sidebar = (): ReturnComponentType => {
    return (
        <div className={classNames(classes.Sidebar)}>
            <Search />
            <PopularMovies />
            <FavouritesMovies />
        </div>
    );
};
