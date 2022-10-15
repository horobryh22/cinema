import classes from './Search.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { SearchField } from 'shared/ui';
import { useSearch } from 'widgets/Sidebar/lib/hooks/useSearch';
import { MoviesList } from 'widgets/Sidebar/ui/MoviesList/MoviesList';

export const Search = (): ReturnComponentType => {
    const { handleSearch, movies, isSuccess, searchTerm } = useSearch();

    return (
        <div className={classNames(classes.Search)}>
            <SearchField
                placeholder="Search"
                onChange={handleSearch}
                value={searchTerm}
            />
            {isSuccess && <MoviesList movies={movies} />}
        </div>
    );
};
