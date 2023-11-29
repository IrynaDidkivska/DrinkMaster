import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './Auth/authSlice';
import { filterReducer } from './Filters/filtersSlice';
import { drinkReducer } from './Drinks/drinksSlice';
import { themeReducer } from './theme/slice';
import { globalReducer } from './Global/globalSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfigUser = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token', 'avatar', 'username', 'theme'],
};

const persistConfigTheme = {
  key: 'theme',
  version: 1,
  storage,
};

export const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: persistReducer(persistConfigUser, userReducer),
    filter: filterReducer,
    drinks: drinkReducer,
    theme: persistReducer(persistConfigTheme, themeReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
