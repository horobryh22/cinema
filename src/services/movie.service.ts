import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from 'api/config';
import { IMovie } from 'shared/types/movie';

export const movieAPI = createApi({
    reducerPath: 'movieAPI',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: build => ({
        fetchMovies: build.query<IMovie[], string>({
            query: (searchTerm?) => ({
                url: '/movies',
                params: searchTerm
                    ? {
                          searchTerm,
                      }
                    : {},
            }),
        }),
        fetchPopularMovies: build.query<IMovie[], void>({
            query: () => ({
                url: '/movies/most-popular',
            }),
        }),
    }),
});

export const { useFetchMoviesQuery, useFetchPopularMoviesQuery } = movieAPI;
