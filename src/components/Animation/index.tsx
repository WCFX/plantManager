import React from 'react';

import LottieView from 'lottie-react-native';

import * as S from './styles';

import plantAnimation from '../../assets/animations/plant.json';

const SplashScreen: React.FC = () => {
  return (
    <S.Container>
      <LottieView
        autoSize
        resizeMode="contain"
        source={plantAnimation}
        loop
        autoPlay
      />
      <S.Title>Plant Manager</S.Title>
    </S.Container>
  );
};

export default SplashScreen;
