import { usePopularGenres } from '../../lib/usePopularGenres/usePopularGenres';
import { Menu } from '../Menu/Menu';

import classes from './GenreMenu.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { SkeletonLoader } from 'shared/ui';
import { SkeletonTheme } from 'shared/ui/SkeletonLoader/SkeletonLoader';

export const GenreMenu = (): ReturnComponentType => {
    const { genres, isLoading } = usePopularGenres();

    return (
        <>
            {isLoading ? (
                <div className={classNames(classes.skeletonWrapper)}>
                    <SkeletonLoader count={4} theme={SkeletonTheme.DEFAULT} />
                </div>
            ) : (
                <Menu menu={{ title: 'Popular genres', items: genres }} />
            )}
        </>
    );
};
