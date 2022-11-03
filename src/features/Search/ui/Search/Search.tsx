import { memo } from 'react';

import { useSearch } from '../../lib/hooks/useSearch/useSearch';
import { SearchList } from '../SearchList/SearchList';

import classes from './Search.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { SearchField } from 'shared/ui';

export const Search = memo((): ReturnComponentType => {
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
});
