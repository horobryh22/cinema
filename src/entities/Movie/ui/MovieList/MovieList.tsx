import { IMovie } from '../../model/types';
import { Movie } from '../Movie/Movie';

import classes from './MovieList.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { AppLink, Button, ButtonTheme, ButtonWidth } from 'shared/ui';

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
            <Button theme={ButtonTheme.PRIMARY} width={ButtonWidth.FULL}>
                <AppLink href={link}>See more</AppLink>
            </Button>
        </div>
    );
};
