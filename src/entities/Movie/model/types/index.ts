import { IActor } from '../../../Actor/model/types';
import { IGenre } from '../../../Genre/model/types';

interface IParameters {
    year: number;
    duration: number;
    country: string;
    _id: string;
}

export interface IMovie {
    _id: string;
    poster: string;
    bigPoster: string;
    title: string;
    rating: number;
    genres: IGenre[];
    countOpened: number;
    videoUrl: string;
    actors: IActor[];
    slug: string;
    isSendTelegram: false;
    createdAt: string;
    parameters: IParameters;
}
