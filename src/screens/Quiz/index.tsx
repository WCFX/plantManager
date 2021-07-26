import React from 'react';
import { useState } from 'react';
import { Platform } from 'react-native';

import { xColors } from '../../styles';
import * as S from './styles';

import { ButtonSubmit } from '../../components/ButtonSubmit';

const Quiz: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <S.Container>
      <S.Form behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <S.Emoticon>🤓</S.Emoticon>
        <S.Title>Como podemos chamar você?</S.Title>
        <S.Input
          style={
            (isFocused || isFilled) && { borderBottomColor: xColors.green }
          }
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          placeholder="Digite seu nome"
          onChangeText={handleInputChange}
        />
        <ButtonSubmit title="Continue" />
      </S.Form>
    </S.Container>
  );
};

export default Quiz;
