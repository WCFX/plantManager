import styled from 'styled-components/native';

import { xColors, xFonts } from '../../styles';

export const ButtonSubmit = styled.TouchableOpacity`
  padding: 15px 25px;
  background: ${xColors.green};
  border: 3px solid ${xColors.green_dark};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const ButtonSubmitText = styled.Text`
  font-size: 22px;
  color: ${xColors.white};
  text-align: center;
  align-self: center;
  letter-spacing: 6px;
  font-family: ${xFonts.Roboto500};
`;
