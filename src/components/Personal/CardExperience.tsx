import * as React from 'react';

import * as S from './styled'

interface Props {
  cargo: string,
  empresa: string,
  local: string
  ano: number
}

const CardExperience:React.FC<Props> = ({ cargo, empresa, local, ano }) => {
  return (
    <S.CardContainer>
      <S.Ano>{ano}</S.Ano>
      <S.Cargo>{cargo}</S.Cargo>
      <S.Empresa>{empresa}</S.Empresa>
      <S.Local>{local}</S.Local>
    </S.CardContainer>
  );
};

export default CardExperience;
