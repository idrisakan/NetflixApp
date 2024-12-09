//import liraries
import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import NotificationItem from '../../components/notifications/notificationsItem';
import {addNotification} from '../../store/slice/notificationSlice';

// create a component
const Notification: React.FC = () => {
  const {notifications} = useSelector(state => state.notifications);

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={notifications}
        renderItem={({item}) => <NotificationItem item={item} />}
      />
    </View>
  );
};

export default Notification;
