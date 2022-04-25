import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const URL_USER = 'https://chat-test-react-app.herokuapp.com/api';

export const loadCurrentUser = createAsyncThunk(
  'currentUser/loadCurrentUser',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(URL_USER);
      if (!response.ok) {
        throw new Error('Could not load currentUser');
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
  currentUser: {},
  error: null,
  status: null,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  extraReducers: {
    [loadCurrentUser.pending]: (state) => {
      state.status = status.loading;
      state.error = null;
    },
    [loadCurrentUser.fulfilled]: (state, action) => {
      state.status = status.resolved;
      state.currentUser = action.payload;
    },
    [loadCurrentUser.rejected]: (state, action) => {
      state.status = status.rejected;
      state.error = action.payload;
    },
  },
});

export const useCurrentUser = () =>
  useSelector((state) => state.currentUser.currentUser);

export default currentUserSlice.reducer;
