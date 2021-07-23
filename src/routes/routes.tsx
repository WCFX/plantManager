import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import * as View from '../screens/index';

const { Screen, Navigator } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Preload" component={View.Preload} />
      <Screen name="Home" component={View.Home} />
    </Navigator>
  );
};

export default Routes;
