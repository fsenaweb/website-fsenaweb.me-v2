import React from "react"
import Photo from './photo'
import flagBR from '../../images/flag-BR.png'
import flagUSA from '../../images/flag-USA.png'

import GlobalStyles from "../../styles/global";

import * as S from './styled'

const Header = () => (
  <S.Wrapper>
    <GlobalStyles/>
    <S.Container>
      <S.Top>
        <S.Logo>
          fsenaweb<span>.me</span>
        </S.Logo>
        <S.Menu>
          <ul>
            <li>Quem sou</li>
            <li>Portfólio</li>
            <li>Contatos</li>
            <li>
              <img src={flagBR} alt="Idioma Português" />
              <img src={flagUSA} alt="English language" />
            </li>
          </ul>
        </S.Menu>
      </S.Top>
      <S.Content>
        <S.HeaderPhoto>
          <Photo/>
        </S.HeaderPhoto>
        <S.Description>
          <S.DescriptionText>
            Desenvolvendo as melhores soluções web para o sucesso da sua empresa
          </S.DescriptionText>
          <S.SkillText>
            Progressive Web App - Sistemas Web - Landing Page
            Single Page Application
          </S.SkillText>
          <S.SocialMedia>
            <S.Linkedin />
            <S.Medium />
            <S.Git />
            <S.Twit />
            <S.Insta />
            <S.Face />
          </S.SocialMedia>
        </S.Description>
      </S.Content>
    </S.Container>
  </S.Wrapper>
)

export default Header
