import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    isNotificationShow: false,
  },
  reducers: {
    showNotification: (state) => {
      state.isNotificationShow = true;
    },
    closeNotification: (state) => {
      state.isNotificationShow = false;
    },
  },
});

export const { showNotification, closeNotification } =
  notificationSlice.actions;

export const useNotificationShow = () =>
  useSelector((state) => state.notification.isNotificationShow);

export default notificationSlice.reducer;
