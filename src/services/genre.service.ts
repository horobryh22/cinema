import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from 'api/config';
import { IGenre } from 'shared/types/movie';

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
