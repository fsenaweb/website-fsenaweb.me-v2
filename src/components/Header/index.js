import React from "react"
import { Link } from 'gatsby'
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
          <Link to="/">fsenaweb<span>.me</span></Link>
        </S.Logo>
        <S.Menu>
          <ul>
            <li><Link to="quem-sou">Quem sou</Link></li>
            <li><Link to="portfolio">Portfólio</Link></li>
            <li><Link to="contatos">Contatos</Link></li>
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
            <a href="http://www.linkedin.com/in/fsenaweb" target="_blank" rel="noreferrer noopener"><S.Linkedin /></a>
            <a href="https://medium.com/@fsenaweb" target="_blank" rel="noreferrer noopener"><S.Medium /></a>
            <a href="https://github.com/fsenaweb/" target="_blank" rel="noreferrer noopener"><S.Git /></a>
            <a href="https://twitter.com/fsenaweb" target="_blank" rel="noreferrer noopener"><S.Twit /></a>
            <a href="http://www.instagram.com/fsenaweb" target="_blank" rel="noreferrer noopener"><S.Insta /></a>
            <a href="http://www.fb.me/fsenaweb" target="_blank" rel="noreferrer noopener"><S.Face /></a>
          </S.SocialMedia>
        </S.Description>
      </S.Content>
    </S.Container>
  </S.Wrapper>
)

export default Header
