import {createSlice} from '@reduxjs/toolkit';
import {NotificationsTypes} from '../../model/data/notificationsTypes';

const initialState: NotificationsTypes = {
  pending: false,
  notifications: [],
};
const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications = action.payload;
    },
    markAsRead: (state, action) => {
      const notificationId = action.payload;
      const notification = state.notifications.find(
        not => not.id === notificationId,
      );
      if (notification) {
        notification.read = true;
      }
    },
  },
});

export const {addNotification, markAsRead} = notificationSlice.actions;
export default notificationSlice.reducer;
