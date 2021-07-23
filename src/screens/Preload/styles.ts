import styled from 'styled-components/native';

import { xColors } from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${xColors.green};
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${xColors.green_dark};
`;

export const TitleColor = styled.Text`
  color: ${xColors.white};
`;
