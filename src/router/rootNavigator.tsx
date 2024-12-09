//import liraries
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME, MOVIESDETAİL, NOTIFICATIONS, TAB} from '../utils/routes';
import Home from '../screens/home';
import TabNavigator from './tabNavigator';
import Colors from '../theme';
import MoviesDetail from '../screens/movies/moviesDetail';
import Notification from '../screens/notification/notification';

const Stack = createNativeStackNavigator();
const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.BLACK,
        },
        headerTintColor: Colors.WHİTE,
        headerBackTitle:'Back'
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen
      options={{
        title:'Film Detay'
      }}
      name={MOVIESDETAİL} component={MoviesDetail} />
      <Stack.Screen name={NOTIFICATIONS} component={Notification} />
    </Stack.Navigator>
  );
};
export default RootNavigator;
