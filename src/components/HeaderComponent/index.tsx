import React from 'react';
import { Text } from 'react-native';

import * as S from './styles';

const HeaderComponent: React.FC = () => {
  return (
    <S.Container>
      <S.ContainerInfo>
        <Text>Olá,</Text>
        <S.Name>Wagner</S.Name>
      </S.ContainerInfo>
    </S.Container>
  );
};

export default HeaderComponent;
