import React from 'react';

import * as S from './styles';

const Quiz: React.FC = () => {
  return (
    <S.Container>
      <S.Form>
        <S.Emoticon>🤓</S.Emoticon>
        <S.Title>Como podemos chamar você?</S.Title>
        <S.Input placeholder="Digite seu nome" />
      </S.Form>
    </S.Container>
  );
};

export default Quiz;
