import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import { xColors } from '../../styles';
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
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    if (environment === 'all') {
      return setFilteredPlants(plants);
    }
    const filtered = plants?.filter((plant) =>
      plant.environments.includes(environment),
    );
    setFilteredPlants(filtered);
  }

  async function fetchPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`,
    );

    if (!data) {
      return setLoading(true);
    }
    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFilteredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) return;
    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
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
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator size={38} color={`${xColors.green}`} />
            ) : (
              <></>
            )
          }
        />
      </S.ContainerPlants>
    </S.Container>
  );
}

export default Main;
