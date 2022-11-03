import { useFetchPopularMoviesQuery } from '../../../api';
import { IMovie } from '../../../model/types';

interface IUsePopularMoviesResult {
    isLoading: boolean;
    popularMovies: IMovie[];
}

export const usePopularMovies = (): IUsePopularMoviesResult => {
    const { popularMovies, isLoading } = useFetchPopularMoviesQuery(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            popularMovies: data ?? [],
            isLoading,
        }),
    });

    return { isLoading, popularMovies };
};
