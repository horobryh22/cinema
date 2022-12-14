import { useTranslation } from 'next-i18next';

import classes from './FavouritesMovies.module.scss';

import { MovieList } from 'entities/Movie';
import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';

export const FavouritesMovies = (): ReturnComponentType => {
    const { t } = useTranslation('common');
    // const { favouritesMovies, isLoading } = useFavouritesMovies();

    // if (isLoading) {
    //     return (
    //         <div className="mt-11">
    //             <SkeletonLoader count={3} className="h-28 mb-4" />
    //         </div>
    //     );
    // }

    if (!false) {
        return (
            <div className={classNames(classes.userNoAuth)}>
                For viewing favorites movies please authorize
            </div>
        );
    }

    return <MovieList title={t('Favourite movies')} link="/trending" movies={[]} />;
};
