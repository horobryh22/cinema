import Image from 'next/image';

import classes from './SearchList.module.scss';

import { getMovieUrl } from 'api/url';
import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { IMovie } from 'shared/types/movie';
import { AppLink } from 'shared/ui';

interface ISearchList {
    movies: IMovie[];
}

export const SearchList = ({ movies }: ISearchList): ReturnComponentType => {
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