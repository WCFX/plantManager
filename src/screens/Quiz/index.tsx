import React, { useState } from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { showMessage, hideMessage } from 'react-native-flash-message';

import { xColors } from '../../styles';
import * as S from './styles';

import { ButtonSubmit } from '../../components';

const Quiz: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const { navigate } = useNavigation();

  function handleNavigateToTheNextPage() {
    showMessage({
      message: 'Hello World',
      description: 'This is our second message',
      type: 'success',
    });
    // navigate('Resume');
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <ButtonSubmit
            onPress={handleNavigateToTheNextPage}
            title="Continue"
          />
        </S.Form>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};

export default Quiz;
