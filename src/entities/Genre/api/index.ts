import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IGenre } from '../model/types';

import { API_URL } from 'shared/api/config';

export const genreAPI = createApi({
    reducerPath: 'genreAPI',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: build => ({
        fetchGenres: build.query<IGenre[], void>({
            query: () => ({
                url: '/genres',
                credentials: 'include',
            }),
        }),
    }),
});

export const { useFetchGenresQuery } = genreAPI;
