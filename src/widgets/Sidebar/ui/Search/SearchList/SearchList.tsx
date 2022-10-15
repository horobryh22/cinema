import Image from 'next/image';

import { getMovieUrl } from 'api/url';
import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { IMovie } from 'shared/types/movie';
import { AppLink } from 'shared/ui';
import classes from 'widgets/Sidebar/ui/Search/SearchList/SearchList.module.scss';

interface IMoviesListProps {
    movies: IMovie[];
}

export const SearchList = ({ movies }: IMoviesListProps): ReturnComponentType => {
    const mappedMovies = movies.map(movie => {
        return (
            <AppLink
                className="sidebar-link"
                key={movie._id}
                href={getMovieUrl(movie.slug)}
            >
                <Image
                    src={movie.poster}
                    width={50}
                    height={50}
                    alt={movie.title}
                    objectFit="cover"
                    objectPosition="top"
                />
                <span>{movie.title}</span>
            </AppLink>
        );
    });

    return (
        <div className={classNames(classes.MoviesList)}>
            {mappedMovies.length ? (
                mappedMovies
            ) : (
                <div className={classes.noMovies}>Movies not found</div>
            )}
        </div>
    );
};
