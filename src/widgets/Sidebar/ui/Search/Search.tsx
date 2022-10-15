import classes from './Search.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { SearchField } from 'shared/ui';
import { useSearch } from 'widgets/Sidebar/lib/hooks/useSearch';
import { SearchList } from 'widgets/Sidebar/ui/Search/SearchList/SearchList';

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
