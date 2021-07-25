import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import Banner from '../../assets/images/watering.png';
import { ButtonSubmit } from '../../components/ButtonSubmit';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToTheNextPage() {
    navigate('Quiz');
  }

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

      <ButtonSubmit onPress={handleNavigateToTheNextPage} title=">" />
    </S.Container>
  );
};

export default Home;
