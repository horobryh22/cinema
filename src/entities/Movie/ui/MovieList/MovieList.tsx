import { IMovie } from '../../model/types';
import { Movie } from '../Movie/Movie';

import classes from './MovieList.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { AppLink, LINK_THEME } from 'shared/ui';

interface IMoviesListProps {
    title: string;
    link: string;
    movies: IMovie[];
}

export const MovieList = ({
    movies,
    link,
    title,
}: IMoviesListProps): ReturnComponentType => {
    const mappedMovies = movies.map(movie => {
        return <Movie key={movie._id} movie={movie} />;
    });

    return (
        <div className={classNames(classes.MovieList)}>
            <div className={classes.heading}>{title}</div>
            {mappedMovies}
            <AppLink href={link} theme={LINK_THEME.BUTTON}>
                See more
            </AppLink>
        </div>
    );
};
