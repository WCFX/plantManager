import React from 'react';

import { SvgUri } from 'react-native-svg';

import * as S from './styles';

const PlantDetail: React.FC = () => {
  return (
    <S.Container>
      <S.SectionOne>
        {/* <SvgUri uri={} with={300} height={300} /> */}
        <S.Title>Samambaia</S.Title>
        <S.Description />

        <S.ContainerCareMethod>
          {/* <S.ContainerImg /> */}
          <S.CareMethod>A rega deve ser feita...</S.CareMethod>
        </S.ContainerCareMethod>
      </S.SectionOne>

      <S.SectionTwo>
        <S.CalendarText>
          Escolha o melhor horário para ser lembrado
        </S.CalendarText>
      </S.SectionTwo>
    </S.Container>
  );
};

export default PlantDetail;
