import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
// eslint-disable-next-line import/no-unresolved
} from 'redux-persist';
// eslint-disable-next-line import/no-unresolved
import storage from 'redux-persist/lib/storage';
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
// eslint-disable-next-line import/no-unresolved
} from '@reduxjs/toolkit';
import userReduser from './auth/auth-slice';
// import errorReducer from '../error/error-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  user: persistReducer(authPersistConfig, userReduser),
  // error: errorReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export default store;

export const persistor = persistStore(store);
