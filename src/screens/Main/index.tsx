import React from 'react';

import * as S from './styles';

import { HeaderComponent, HorizontalButton } from '../../components';

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.ContainerHeader>
        <HeaderComponent />
        <S.ContainerInfo>
          <S.Title>Em qual hambiente</S.Title>
          <S.Description>você quer colocar a sua planta</S.Description>
        </S.ContainerInfo>
        <HorizontalButton active title="Black" />
      </S.ContainerHeader>
    </S.Container>
  );
};

export default Main;
