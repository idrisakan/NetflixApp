//import liraries
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  DOWNLOADS,
  FASTLOUGHTS,
  GAMES,
  HOME,
  NEWHOT,
  NOTIFICATIONS,
} from '../utils/routes';
import Home from '../screens/home';
import Games from '../screens/games';
import NewHots from '../screens/newHots';
import Fastlaughts from '../screens/fastlaughts';
import Downloads from '../screens/dowloads';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../theme';
import {Image, Pressable, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const TabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();
  const {notifications} = useSelector(state => state.notifications);
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerLeft: () => (
          <Image
            source={require('../assets/icons/netflix-icon.png')}
            style={{
              height: 40,
              width: 40,
              resizeMode: 'center',
            }}
          />
        ),
        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
            }}>
            <Pressable
              onPress={() => navigation.navigate(NOTIFICATIONS)}
              style={{paddingHorizontal: 5}}>
              <Ionicons
                name="notifications-outline"
                size={28}
                color={Colors.WHİTE}
              />
              {notifications?.filter(item=>!item.read).length != 0 && (
                <View
                  style={{
                    backgroundColor: Colors.RED,
                    position: 'absolute',
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    left: -3,
                    top: -5,
                  }}>
                  <Text style={{color: Colors.WHİTE, fontWeight: '500'}}>
                    {notifications?.filter(item=>!item.read).length}
                  </Text>
                </View>
              )}
            </Pressable>
            <Pressable style={{paddingHorizontal: 5}}>
              <Ionicons name="search-outline" size={28} color={Colors.WHİTE} />
            </Pressable>
            <Pressable>
              <Ionicons
                name="person-circle-outline"
                size={28}
                color={Colors.WHİTE}
              />
            </Pressable>
          </View>
        ),
        headerTintColor: Colors.WHİTE,
        headerStyle: {
          backgroundColor: Colors.BLACK,
        },
        tabBarStyle: {backgroundColor: Colors.BLACK},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === HOME) {
            iconName = 'home-outline';
          } else if (route.name === GAMES) {
            iconName = 'game-controller-outline';
          } else if (route.name === NEWHOT) {
            iconName = 'play-circle-outline';
          } else if (route.name === FASTLOUGHTS) {
            iconName = 'happy-outline';
          } else if (route.name === DOWNLOADS) {
            iconName = 'download-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.WHİTE,
        tabBarInactiveTintColor: Colors.GRAY,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={GAMES} component={Games} />
      <Tab.Screen name={NEWHOT} component={NewHots} />
      <Tab.Screen name={FASTLOUGHTS} component={Fastlaughts} />
      <Tab.Screen name={DOWNLOADS} component={Downloads} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
