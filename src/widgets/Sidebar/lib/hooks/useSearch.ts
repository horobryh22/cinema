import { ChangeEvent, useState } from 'react';

import { useFetchMoviesQuery } from 'services/movie.service';
import { useDebounce } from 'shared/hooks/useDebounce';
import { IMovie } from 'shared/types/movie';

interface IUseSearchResult {
    movies: IMovie[];
    isSuccess: boolean;
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
    searchTerm: string;
}

export const useSearch = (): IUseSearchResult => {
    const [searchTerm, setSearchTerm] = useState('');
    const debounced = useDebounce(searchTerm, 500);

    const { movies, isSuccess } = useFetchMoviesQuery(debounced, {
        selectFromResult: ({ data, isSuccess }) => ({
            movies: data ?? [],
            isSuccess,
        }),
        skip: !debounced,
    });

    const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(e.currentTarget.value);
    };

    return { movies, isSuccess, handleSearch, searchTerm };
};
