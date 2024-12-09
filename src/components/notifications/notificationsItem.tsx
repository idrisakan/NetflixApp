//import liraries
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Colors from '../../theme';
import {NotificationItemProps} from '../../model/ui/notificationItemProps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {markAsRead} from '../../store/slice/notificationSlice';
import {useNavigation} from '@react-navigation/native';
import {MOVIESDETAİL} from '../../utils/routes';
import firestore from '@react-native-firebase/firestore';

const NotificationItem: React.FC<NotificationItemProps> = ({item}) => {
  const distparch = useDispatch();
  const navigation = useNavigation();
  const updateNotification = () => {
    firestore()
      .collection('Notifications')
      .doc(item.doc)
      .update({
        read: true,
      })
      .then(() => {
        console.log('güncellendi');
      });
  };
  return (
    <Pressable
      onPress={() => {
        distparch(markAsRead(item.id));
        updateNotification();
        navigation.navigate(MOVIESDETAİL, {id: item.moviId});
      }}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: Colors.GRAY,
        padding: 10,
        paddingVertical: 20,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}>
        <Ionicons name="notifications-outline" size={28} color={Colors.WHİTE} />
        {!item.read && (
          <View
            style={{
              backgroundColor: Colors.RED,
              width: 12,
              height: 12,
              borderRadius: 100,
              position: 'absolute',
              left: 10,
              top: 0,
            }}
          />
        )}
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, color: Colors.WHİTE}}>{item.title}</Text>
          <Text style={{fontSize: 16, color: Colors.GRAY}}>{item.time}</Text>
        </View>
        <Text style={{fontSize: 16, color: Colors.WHİTE}}>
          {item.description}
        </Text>
      </View>
    </Pressable>
  );
};

export default NotificationItem;
