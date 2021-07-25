import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface ButtonSubmitProps extends TouchableOpacityProps {
  title: string;
}

export const ButtonSubmit = ({ title, ...rest }: ButtonSubmitProps) => {
  return (
    <S.ButtonSubmit {...rest}>
      <S.ButtonSubmitText>{title}</S.ButtonSubmitText>
    </S.ButtonSubmit>
  );
};
