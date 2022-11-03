import { configureStore } from '@reduxjs/toolkit';
import { EnhancedStore } from '@reduxjs/toolkit/src/configureStore';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';

import { genreAPI } from 'services/genre.service';
import { movieAPI } from 'services/movie.service';

export const createReduxStore = (): EnhancedStore => {
    const rootReducer = combineReducers({
        toastr: toastrReducer,
        [genreAPI.reducerPath]: genreAPI.reducer,
        [movieAPI.reducerPath]: movieAPI.reducer,
    });

    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware()
                .concat(genreAPI.middleware)
                .concat(movieAPI.middleware),
    });

    return store;
};
