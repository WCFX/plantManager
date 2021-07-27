import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { xColors, xFonts } from '../../styles';

export const Plant = styled(RectButton)`
  max-width: 150px;
  background-color: ${xColors.shape};
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  margin: 25px 10px;
`;

export const PlantText = styled.Text`
  color: ${xColors.green_dark};
  width: 100px;
  text-align: center;
  font-family: ${xFonts.Jost400};
  margin: 10px;
`;
