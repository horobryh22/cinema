import { useTranslation } from 'next-i18next';

import classes from './GenreMenu.module.scss';

import { usePopularGenres } from 'entities/Genre';
import { Menu } from 'entities/Menu';
import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { SkeletonLoader, SkeletonTheme } from 'shared/ui';

export const GenreMenu = (): ReturnComponentType => {
    const { t } = useTranslation('common');
    const { genres, isLoading } = usePopularGenres();

    return (
        <>
            {isLoading ? (
                <div className={classNames(classes.skeletonWrapper)}>
                    <SkeletonLoader count={4} theme={SkeletonTheme.DEFAULT} />
                </div>
            ) : (
                <Menu menu={{ title: t('Popular genres'), items: genres }} />
            )}
        </>
    );
};
