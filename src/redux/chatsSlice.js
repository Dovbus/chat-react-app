import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const URL = 'http://localhost:3002/chats';

export const loadChats = createAsyncThunk(
  'chats/loadChats',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Could not load chats');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const status = {
  loading: 'loading',
  resolved: 'resolved',
  rejected: 'rejected',
};

const initialState = {
  chats: [],
  status: null,
  error: null,
};

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  extraReducers: {
    [loadChats.pending]: (state) => {
      state.status = status.loading;
      state.error = null;
    },
    [loadChats.fulfilled]: (state, action) => {
      state.chats = action.payload;
      state.status = status.resolved;
    },
    [loadChats.rejected]: (state, action) => {
      state.status = status.rejected;
      state.error = action.payload;
    },
  },
});

export const useChats = () => useSelector((state) => state.chats.chats);

export default chatsSlice.reducer;
