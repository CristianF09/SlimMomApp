import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import { authReducer } from './auth/authSlice';
import { productReducer } from './product/productSlice';
import { calorieReducer } from './calorie/calorieSlice';
import { entryReducer } from './entry/entrySlice';
import { userReducer } from './users/userSlice';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'calorie', 'entry'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};

const caloriePersistConfig = {
  key: 'calorie',
  storage,
  whitelist: ['dailyCalorieIntake'],
};

const entryPersistConfig = {
  key: 'entry',
  storage,
  whitelist: ['entries'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  product: productReducer,
  calorie: persistReducer(caloriePersistConfig, calorieReducer),
  entry: persistReducer(entryPersistConfig, entryReducer),
  users: userReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);