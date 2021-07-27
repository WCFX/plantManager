import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import { ButtonSubmit } from '../../components';

const Resume: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToTheNextPage() {
    navigate('Main');
  }

  return (
    <S.Container>
      <S.ContainerContent>
        <S.Emoticon>👏😆</S.Emoticon>
        <S.Title>Prontinho!!</S.Title>
        <S.Description>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado
        </S.Description>
        <ButtonSubmit onPress={handleNavigateToTheNextPage} title="Confirmar" />
      </S.ContainerContent>
    </S.Container>
  );
};

export default Resume;
