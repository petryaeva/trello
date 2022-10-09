import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import trelloReducer from '../redux/trelloReducer';
import { TrelloState } from '../redux/trelloReduxTypes';
import { batchedSubscribe } from 'redux-batched-subscribe';
import _ from 'lodash';
import logger from 'redux-logger';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const debounceNotify = _.debounce(notify => notify());

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, trelloReducer);

export const store = configureStore({
  reducer: {
    trello: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
  }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [batchedSubscribe(debounceNotify)],
});

export const persistor = persistStore(store);
export default interface IReduxState {
	trello: TrelloState;
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
