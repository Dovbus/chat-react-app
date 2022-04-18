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
  },
});

const { loadMessages } = messagesSlice.actions;

const useMessages = () => useSelector((state) => state.messages.messages);

export { loadMessages, useMessages };

export default messagesSlice.reducer;
