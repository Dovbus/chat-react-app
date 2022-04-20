import { configureStore, combineReducers } from '@reduxjs/toolkit';
import chatsReducer from './chatsSlice';
import messagesReducer from './messagesSlice';
import currentUserReducer from './currentUserSlice';
import userReducer from './userSlice';
import notificationReducer from './notificationSlice';

const rootReducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
  currentUser: currentUserReducer,
  user: userReducer,
  notification: notificationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
