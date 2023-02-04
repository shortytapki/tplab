import { legacy_createStore } from 'redux';
import { rootReducer } from './RootReducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(persistedReducer);

export const persistor = persistStore(store);
