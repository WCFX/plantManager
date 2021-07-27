import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { xColors, xFonts } from '../../styles';

export const Button = styled(RectButton)<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? `${xColors.shape}` : `${xColors.green}`};
  width: 86px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

export const ButtonText = styled.Text<{ active: boolean }>`
  color: ${(props) =>
    props.active ? `${xColors.heading}` : `${xColors.white}`};
  font-size: 16px;
  font-family: ${xFonts.Jost600};
`;
