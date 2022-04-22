import { configureStore, combineReducers } from '@reduxjs/toolkit';
import chatsReducer from './chatsSlice';
import messagesReducer from './messagesSlice';
import currentUserReducer from './currentUserSlice';
import userReducer from './userSlice';
import notificationReducer from './notificationSlice';
import authReducer from './authSlice';
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

const rootReducer = combineReducers({
  auth: authReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  currentUser: currentUserReducer,
  user: userReducer,
  notification: notificationReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['notification'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
