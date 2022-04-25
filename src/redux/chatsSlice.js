import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const URL = 'https://localhost:3002/chats';

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
  searchedChats: [],
  status: null,
  error: null,
};

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChatMessage: (state, action) => {
      const index = state.chats.findIndex(
        (chat) => chat.user.username === action.payload.sendTo
      );
      state.chats[index].messages.push({
        id: Math.random(),
        content: action.payload.message,
        createdAt: new Date().getTime(),
        'user-id': 1000,
        sendTo: action.payload.sendTo,
      });
    },
    receiveChatMessage: (state, action) => {
      const index = state.chats.findIndex(
        (chat) => chat.user['user-id'] === action.payload['user-id']
      );
      state.chats[index].messages.push(action.payload);
    },
    sortChats: (state) => {
      state.chats.sort((a, b) => {
        return (
          b.messages[b.messages.length - 1].createdAt -
          a.messages[a.messages.length - 1].createdAt
        );
      });
    },
    setChatsSearch: (state, action) => {
      state.searchedChats = state.chats.filter((chat) => {
        return chat.user.username
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
    },
  },
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

export const { addChatMessage, receiveChatMessage, sortChats, setChatsSearch } =
  chatsSlice.actions;

export const useChats = () => useSelector((state) => state.chats.chats);
export const useSearchedChats = () =>
  useSelector((state) => state.chats.searchedChats);

export default chatsSlice.reducer;
