
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
import userReducer from './users/userSlice';


const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'calorie', 'entry'], 
};


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'], // Persistă token-ul și utilizatorul
};

// Configurație pentru persistența stării de calcul caloric
const caloriePersistConfig = {
  key: 'calorie',
  storage,
  whitelist: ['dailyCalorieIntake'], // Persistă necesarul zilnic de calorii
};

// Configurație pentru persistența stării de intrări (entries)
const entryPersistConfig = {
  key: 'entry',
  storage,
  whitelist: ['entries'], // Persistă lista de intrări
};

// Combină toți reducerii într-un singur reducer rădăcină
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer), // Autentificare
  product: productReducer, // Produse
  calorie: persistReducer(caloriePersistConfig, calorieReducer), // Calcul caloric
  entry: persistReducer(entryPersistConfig, entryReducer), // Intrări
  users: userReducer, // Utilizatori (asigură-te că acest reducer există)
});

// Aplică persistența pe întregul reducer rădăcină
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// Creează store-ul Redux
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignoră acțiunile specifice pentru redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development', // Activează Redux DevTools doar în mediul de dezvoltare
});

// Creează persistor-ul pentru Redux Persist
export const persistor = persistStore(store);