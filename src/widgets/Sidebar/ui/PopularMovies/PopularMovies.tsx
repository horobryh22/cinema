import { usePopularMovies } from 'entities/Movie';
import { MovieList } from 'entities/Movie/ui/MovieList/MovieList';
import { ReturnComponentType } from 'shared/types';
import { SkeletonLoader } from 'shared/ui';

export const PopularMovies = (): ReturnComponentType => {
    const { popularMovies, isLoading } = usePopularMovies();

    if (isLoading) {
        return (
            <div className="mt-11">
                <SkeletonLoader count={3} className="h-28 mb-4" />
            </div>
        );
    }

    return <MovieList title="Popular movies" link="/trending" movies={popularMovies} />;
};
