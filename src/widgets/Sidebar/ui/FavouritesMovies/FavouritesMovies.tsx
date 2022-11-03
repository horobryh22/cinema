import { MovieList } from 'entities/Movie/ui/MovieList/MovieList';
import { ReturnComponentType } from 'shared/types';

export const FavouritesMovies = (): ReturnComponentType => {
    // const { favouritesMovies, isLoading } = useFavouritesMovies();

    // if (isLoading) {
    //     return (
    //         <div className="mt-11">
    //             <SkeletonLoader count={3} className="h-28 mb-4" />
    //         </div>
    //     );
    // }

    // if (!userAuth) {
    //     return (
    //         <div className={classNames(classes.userNoAuth)}>
    //             For viewing favorites movies please authorize
    //         </div>
    //     );
    // }

    return <MovieList title="Favourites movies" link="/trending" movies={[]} />;
};