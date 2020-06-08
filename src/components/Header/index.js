import React from "react"
import Photo from './photo'

import * as S from './styled'

const Header = () => (
  <S.Wrapper>
    <S.Container>
      <S.Logo>
        fsenaweb<span>.me</span>
      </S.Logo>
      <S.HeaderPhoto>
        <Photo/>
      </S.HeaderPhoto>
    </S.Container>
  </S.Wrapper>
)

export default Header
