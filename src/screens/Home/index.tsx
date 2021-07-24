import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import Arrow from '../../assets/images/arrow.png';
import Banner from '../../assets/images/watering.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.ContainerSection>
        <S.Title>Gerencie{'\n'}suas plantas de forma fácil</S.Title>
      </S.ContainerSection>
      <S.Banner source={Banner} resizeMode="contain" />

      <S.ContainerSection>
        <S.Description>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </S.Description>
      </S.ContainerSection>

      <S.ButtonSubmit onPress={() => navigation.navigate('Quiz')}>
        <S.Arrow source={Arrow} />
      </S.ButtonSubmit>
    </S.Container>
  );
};

export default Home;
