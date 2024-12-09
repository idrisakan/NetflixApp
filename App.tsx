//import liraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {StatusBar} from 'react-native';
import Colors from './src/theme';

// create a component
const App: React.FC = () => {
  const linking = {
    prefixes: ['http://www.netflix.com', 'https://www.netflix.com'],
    config: {
      screens: {
        TAB: '',
        movidetail: 'detail/:id',
      },
    },
  };
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <StatusBar backgroundColor={Colors.BLACK} barStyle={'light-content'} />
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
