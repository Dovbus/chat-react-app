import { configureStore, combineReducers } from '@reduxjs/toolkit';
import chatsReducer from './chatsSlice';
import messagesReducer from './messagesSlice';
import currentUserReducer from './currentUserSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
  currentUser: currentUserReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
