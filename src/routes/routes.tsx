import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import * as View from '../screens/index';

const { Screen, Navigator } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator
      initialRouteName="Preload"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Preload" component={View.Preload} />
      <Screen name="Home" component={View.Home} />
      <Screen name="Quiz" component={View.Quiz} />
    </Navigator>
  );
};

export default Routes;
