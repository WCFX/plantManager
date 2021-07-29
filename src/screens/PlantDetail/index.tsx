import React from 'react';

import { useRoute } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';

import * as S from './styles';

import waterDrop from '../../assets/images/waterdrop.png';

interface Params {
  plant: {
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
  };
}

const PlantDetail: React.FC = () => {
  const route = useRoute();

  const { plant } = route.params as Params;

  return (
    <S.Container>
      <S.PlantInfo>
        <SvgUri uri={plant.photo} width={156} height={176} />

        <S.Title>{plant.name}</S.Title>
        <S.Description>{plant.about}</S.Description>

        <S.ContainerCareMethod>
          <S.Img source={waterDrop} />
          <S.CareMethod>{plant.water_tips}</S.CareMethod>
        </S.ContainerCareMethod>
      </S.PlantInfo>
      <S.SectionTwo>
        <S.CalendarText>olá</S.CalendarText>
        <S.RegisterPlant>
          <S.RegisterPlantText>Cadastrar Planta</S.RegisterPlantText>
        </S.RegisterPlant>
      </S.SectionTwo>
    </S.Container>
  );
};

export default PlantDetail;
