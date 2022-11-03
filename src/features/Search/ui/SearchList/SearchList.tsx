import { memo, useMemo } from 'react';

import Image from 'next/image';

import classes from './SearchList.module.scss';

import { IMovie } from 'entities/Movie';
import { classNames, getMovieUrl } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { AppLink } from 'shared/ui';

interface ISearchList {
    movies: IMovie[];
}

export const SearchList = memo(({ movies }: ISearchList): ReturnComponentType => {
    const mappedMovies = useMemo(() => {
        return movies.map(movie => {
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
    }, [movies]);

    return (
        <div className={classNames(classes.MoviesList)}>
            {mappedMovies.length ? (
                mappedMovies
            ) : (
                <div className={classes.noMovies}>Movies not found</div>
            )}
        </div>
    );
});
