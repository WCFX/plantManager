import React from 'react';

import * as S from './styles';

import { ButtonSubmit } from '../../components/ButtonSubmit';

const Resume: React.FC = () => {
  return (
    <S.Container>
      <S.ContainerContent>
        <S.Emoticon>🧐</S.Emoticon>
        <S.Description>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado
        </S.Description>
        <ButtonSubmit title="Confirmar" />
      </S.ContainerContent>
    </S.Container>
  );
};

export default Resume;
