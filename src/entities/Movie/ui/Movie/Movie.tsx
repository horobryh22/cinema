import Image from 'next/image';

import { IMovie } from '../../model/types';

import classes from './Movie.module.scss';

import { classNames, getGenresString, getGenreUrl, getMovieUrl } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { AppLink, MaterialIcon } from 'shared/ui';

interface IMovieProps {
    movie: IMovie;
}

export const Movie = ({ movie }: IMovieProps): ReturnComponentType => {
    const { title, poster, slug, genres, rating } = movie;

    const mappedGenres = genres.map((genre, index) => {
        return (
            <AppLink key={genre._id} href={getGenreUrl(genre.slug)}>
                {getGenresString(index, genres.length, genre.name)}
            </AppLink>
        );
    });

    return (
        <div className={classNames(classes.MovieItem)}>
            <AppLink href={getMovieUrl(slug)}>
                <Image
                    draggable={false}
                    alt={title}
                    width={65}
                    height={97}
                    src={poster}
                    priority
                />
            </AppLink>
            <div className={classes.info}>
                <div className={classes.heading}>{title}</div>
                <div className={classes.genres}>{mappedGenres}</div>
                <div className={classes.rating}>
                    <MaterialIcon name="MdStarRate" />
                    <span>{rating.toFixed(1)}</span>
                </div>
            </div>
        </div>
    );
};
