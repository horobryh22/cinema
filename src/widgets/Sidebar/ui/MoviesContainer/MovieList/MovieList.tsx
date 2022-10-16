import { MovieItem } from '../MovieItem/MovieItem';

import classes from './MovieList.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { IMovie } from 'shared/types/movie';
import { AppLink } from 'shared/ui';
import { LINK_THEME } from 'shared/ui/AppLink/AppLink';

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
        return <MovieItem key={movie._id} movie={movie} />;
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
