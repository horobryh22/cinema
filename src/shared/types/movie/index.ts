export interface IGenre {
    _id: string;
    name: string;
    slug: string;
    description: string;
    icon: string;
    createdAt: string;
}

export interface IActor {
    _id: string;
    name: string;
    photo: string;
    slug: string;
    createdAt: string;
    countMovies: number;
}

export interface IParameters {
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
