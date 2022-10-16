import { configureStore } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';

import { genreAPI } from 'services/genre.service';
import { movieAPI } from 'services/movie.service';

const rootReducer = combineReducers({
    toastr: toastrReducer,
    [genreAPI.reducerPath]: genreAPI.reducer,
    [movieAPI.reducerPath]: movieAPI.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(genreAPI.middleware).concat(movieAPI.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
