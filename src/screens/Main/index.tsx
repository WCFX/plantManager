import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import * as S from './styles';

import {
  HeaderComponent,
  HorizontalButton,
  Loading,
  PlantCardPrimary,
} from '../../components';
import api from '../../server/api';

interface EnvironmentsProps {
  key: string;
  title: string;
  id: string;
}

interface PlantsProps {
  id: number;
  name: string;
  about: string;
  photo: string;
  water_tips: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export function Main() {
  const [environments, setEnvironments] = useState<EnvironmentsProps[]>();
  const [plants, setPlants] = useState<PlantsProps[]>();
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>();
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    if (environment === 'all') {
      return setFilteredPlants(plants);
    }
    const filtered = plants?.filter((plant) =>
      plant.environments.includes(environment),
    );
    return setFilteredPlants(filtered);
  }

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get(
        'plants_environments?_sort=title&_order=asc',
      );
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

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get('plants?_sort=title&_order=asc');
      setPlants(data);
      setLoading(false);
    }
    fetchPlants();
  }, []);

  if (loading) {
    return <Loading />;
  }
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
              <HorizontalButton
                active={item.key === environmentSelected}
                onPress={() => handleEnvironmentSelected(item.key)}
                title={item.title}
              />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </S.ContainerHeader>
      <S.ContainerPlants>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => (
            <View key={item.id}>
              <PlantCardPrimary data={item} />
            </View>
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </S.ContainerPlants>
    </S.Container>
  );
}

export default Main;
