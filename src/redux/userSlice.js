import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { loadUser } = userSlice.actions;
const useUser = () => useSelector((state) => state.user.user);

export { loadUser, useUser };

export default userSlice.reducer;
