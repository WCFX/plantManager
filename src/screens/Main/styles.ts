// import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

import { xColors, xFonts } from '../../styles';

// export const styles = StyleSheet.create({
//   ButtonList: {},
// });

export const Container = styled.View``;

export const ContainerHeader = styled.View`
  padding: 25px;
`;

export const ContainerInfo = styled.View`
  margin: 50px 0 20px 0;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${xColors.body_dark};
  font-family: ${xFonts.Nunito700};
`;

export const Description = styled.Text`
  font-size: 18px;
  color: ${xColors.body_dark};
  font-family: ${xFonts.Nunito500};
`;
