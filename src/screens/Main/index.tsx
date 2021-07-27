import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import * as S from './styles';

import { HeaderComponent, HorizontalButton } from '../../components';
import api from '../../server/api';

interface EnvironmentsProps {
  key: string;
  title: string;
  id: string;
}

const Main: React.FC = () => {
  const [environments, setEnvironments] = useState<EnvironmentsProps[]>();

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get('plants_environments');
      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]);
    }

    fetchEnvironment();
  }, []);

  return (
    <S.Container>
      <S.ContainerHeader>
        <HeaderComponent />
        <S.ContainerInfo>
          <S.Title>Em qual hambiente</S.Title>
          <S.Description>você quer colocar a sua planta</S.Description>
        </S.ContainerInfo>
        <FlatList
          data={environments}
          renderItem={({ item }) => (
            <View key={item.id}>
              <HorizontalButton title={item.title} />
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
