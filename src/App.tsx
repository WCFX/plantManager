import React from 'react';
import { View } from 'react-native';

// import LottieView from 'lottie-react-native';

// import plantAnimation from './assets/animations/plant.json';
import SplashScreen from './components/Animation';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SplashScreen />
    </View>
  );
};

export default App;
