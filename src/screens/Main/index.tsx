import React from 'react';
import { FlatList, View } from 'react-native';

import * as S from './styles';

import { HeaderComponent, HorizontalButton } from '../../components';

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.ContainerHeader>
        <HeaderComponent />
        <S.ContainerInfo>
          <S.Title>Em qual hambiente</S.Title>
          <S.Description>você quer colocar a sua planta</S.Description>
        </S.ContainerInfo>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => (
            <View key={item}>
              <HorizontalButton active title="Black" />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={styles.ButtonList}
        />
      </S.ContainerHeader>
    </S.Container>
  );
};

export default Main;
