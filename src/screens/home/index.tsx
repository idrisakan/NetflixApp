import React, {useEffect, useState} from 'react';
import {View, FlatList, Platform, PermissionsAndroid} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import SectionItem from '../../components/movies/sectionItem';
import {homeData} from '../../utils/homeSection';
import firestore from '@react-native-firebase/firestore';
import messaging, {firebase} from '@react-native-firebase/messaging';
import {useDispatch} from 'react-redux';
import {addNotification} from '../../store/slice/notificationSlice';
import {MOVIESDETAİL} from '../../utils/routes';

const Home: React.FC = ({navigation}) => {
  const dispatch = useDispatch();
  const [newNoti,setNewNoti]=useState(false)
  const getToken = async () => {
    const token = await messaging().getToken();
  };

  const requestUserPermission = async () => {
    if (Platform.OS == 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    } else {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        console.log('Authorization status', authStatus);
      }
    }
  };
  const addNotificationToFireStore = async notification => {
    firestore()
      .collection('Notifications')
      .add(notification)
      .then(() => {
        console.log('notification added!');
      });
  };
  const getNotifications = () => {
    firestore()
      .collection('Notifications')
      .get()
      .then(querySnapShot => {
        const savedNotification = [];
        querySnapShot.forEach(documentSnapshot => {
          savedNotification.push({
            id: documentSnapshot.data().id,
            description: documentSnapshot.data().description,
            moviId: documentSnapshot.data().moviId,
            read: documentSnapshot.data().read,
            time: documentSnapshot.data().time,
            title: documentSnapshot.data().title,
            doc: documentSnapshot.id,
          });
        });
        dispatch(addNotification(savedNotification));
      });
  };
  const subscribeToTopic = async () => {
    try {
      await messaging().subscribeToTopic('Haberler');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNotifications();
    
  }, [newNoti])

  useEffect(() => {
   
    requestUserPermission();
    getToken();
    subscribeToTopic();
    firebase.messaging().onMessage(response => {
      const read = response?.data?.read == 'false' ? false : true;
      addNotificationToFireStore({
        id: response?.data?.id,
        title: response.notification?.title,
        description: response.notification?.body,
        time: response?.data?.time,
        read: read,
        moviId:Number(response.data.moviId)
      });
      setNewNoti(true)
    });
    messaging().onNotificationOpenedApp(remoteMessage => {
      if (remoteMessage) {
        navigation.navigate(MOVIESDETAİL, {id: remoteMessage?.data?.id});
      }
    });
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage && remoteMessage?.data?.read == 'false') {
          navigation.navigate(MOVIESDETAİL, {id: remoteMessage?.data?.id});
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={homeData}
        renderItem={({item}) => <SectionItem sectionItem={item} />}
      />
    </View>
  );
};

//make this component available to the app
export default Home;
