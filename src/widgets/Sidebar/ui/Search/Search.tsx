import { useSearch } from '../../lib/hooks/useSearch';

import classes from './Search.module.scss';
import { SearchList } from './SearchList/SearchList';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { SearchField } from 'shared/ui';

export const Search = (): ReturnComponentType => {
    const { handleSearch, movies, isSuccess, searchTerm } = useSearch();

    return (
        <div className={classNames(classes.Search)}>
            <SearchField
                placeholder="Search"
                onChange={handleSearch}
                value={searchTerm}
            />
            {isSuccess && <SearchList movies={movies} />}
        </div>
    );
};
