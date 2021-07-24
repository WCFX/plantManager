import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { xColors } from './styles/colors';

import Routes from './routes/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar backgroundColor={`${xColors.green}`} />
    </NavigationContainer>
  );
};

export default App;
