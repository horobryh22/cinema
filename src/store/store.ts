import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { genreAPI } from 'services/genre.service';

const rootReducer = combineReducers({
    [genreAPI.reducerPath]: genreAPI.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(genreAPI.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
