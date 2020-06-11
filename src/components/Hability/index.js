import React from 'react'
import { icons } from './icon'
import * as S from './styled'

const Hability = () => (
  <S.Wrapper>
    <S.Container>
      <S.Title>Habilidades</S.Title>
      { icons.map((item, i) => {
        return (
          <S.ListHability key={i}>
            <img src={item.image} alt={item.title} />
          { item.title }
          </S.ListHability>
        )
      })}
    </S.Container>
  </S.Wrapper>
)

export default Hability;
