import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    loadMessages: (state, action) => {
      state.messages = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push({
        id: Math.random(),
        content: action.payload.message,
        createdAt: new Date().getTime(),
        'user-id': 1000,
        sendTo: action.payload.sendTo,
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

const { loadMessages, addMessage, receiveMessage } = messagesSlice.actions;

const useMessages = () => useSelector((state) => state.messages.messages);

export { loadMessages, useMessages, addMessage, receiveMessage };

export default messagesSlice.reducer;
