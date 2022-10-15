import classes from './NotAuthFavorites.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';

export const NotAuthFavorites = (): ReturnComponentType => {
    return (
        <div className={classNames(classes.NotAuthFavorites)}>
            For viewing favorites movies please authorize
        </div>
    );
};
