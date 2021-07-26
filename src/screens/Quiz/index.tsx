import React from 'react';
import { useState } from 'react';
import { Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { xColors } from '../../styles';
import * as S from './styles';

import { ButtonSubmit } from '../../components/ButtonSubmit';

const Quiz: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const { navigate } = useNavigation();

  function handleNavigateToTheNextPage() {
    navigate('Resume');
  }

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
        <S.Emoticon>{isFilled ? '🤩' : '🧐'}</S.Emoticon>
        <S.Title>Como podemos chamar você?</S.Title>
        <S.Input
          style={
            (isFocused || isFilled) && { borderBottomColor: xColors.green }
          }
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          placeholder="Digite seu nome"
          onChangeText={handleInputChange}
          autoCapitalize="words"
        />
        <ButtonSubmit onPress={handleNavigateToTheNextPage} title="Continue" />
      </S.Form>
    </S.Container>
  );
};

export default Quiz;
