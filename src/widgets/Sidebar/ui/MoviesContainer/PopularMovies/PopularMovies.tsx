import { MovieList } from '../MovieList/MovieList';

import { useFetchPopularMoviesQuery } from 'services/movie.service';
import { ReturnComponentType } from 'shared/types';
import { SkeletonLoader } from 'shared/ui';

export const PopularMovies = (): ReturnComponentType => {
    const { popularMovies, isLoading } = useFetchPopularMoviesQuery(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            popularMovies: data ?? [],
            isLoading,
        }),
    });

    if (isLoading) {
        return (
            <div className="mt-11">
                <SkeletonLoader count={3} className="h-28 mb-4" />
            </div>
        );
    }

    return <MovieList title="Popular movies" link="/trending" movies={popularMovies} />;
};
