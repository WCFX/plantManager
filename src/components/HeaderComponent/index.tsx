import React from 'react';

import * as S from './styles';

import avatarPic from '../../assets/images/avatar.jpg';

const HeaderComponent: React.FC = () => {
  return (
    <S.Container>
      <S.ContainerInfo>
        <S.Title>Olá,</S.Title>
        <S.Name>Wagner</S.Name>
      </S.ContainerInfo>
      <S.ContainerPic>
        <S.ProfileAvatar source={avatarPic} />
      </S.ContainerPic>
    </S.Container>
  );
};

export default HeaderComponent;
