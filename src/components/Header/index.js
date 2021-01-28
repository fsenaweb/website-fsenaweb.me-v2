import React  from "react"
import { Link } from 'gatsby'
import MenuMobile from '../MenuMobile';

import Photo from './photo'

import GlobalStyles from "../../styles/global";
import * as S from './styled'

const Header = () => {

  return (
    <S.Wrapper>
      <GlobalStyles/>
      <S.Container>
        <S.Top>
          <S.Logo>
            <Link to="/">fsenaweb<span>.me</span></Link>
          </S.Logo>
          <S.FirstMenu>
            <ul>
              <li><Link to="/quem-sou">Quem sou</Link></li>
              <li><Link to="/portfolio">Portfólio</Link></li>
              {/*<li>*/}
              {/*  <img src={flagBR} alt="Idioma Português" />*/}
              {/*  <img src={flagUSA} alt="English language" />*/}
              {/*</li>*/}
            </ul>
          </S.FirstMenu>
          <MenuMobile />
        </S.Top>
        <S.Content>
          <S.HeaderPhoto>
            <Photo/>
          </S.HeaderPhoto>
          <S.Description>
            <S.DescriptionText>
              Matheus Ricelly <br />
              Front-end Software Engineer
            </S.DescriptionText>
            <S.SkillText>
              Progressive Web App - Landing Page - Single Page Application - Mobile App
            </S.SkillText>
            <S.SocialMedia>
              <a href="http://www.linkedin.com/in/fsenaweb" aria-label="Linkedin" target="_blank" rel="noreferrer noopener"><S.Linkedin /></a>
              <a href="https://medium.com/@fsenaweb" target="_blank" aria-label="Medium" rel="noreferrer noopener"><S.Medium /></a>
              <a href="https://github.com/fsenaweb/" target="_blank" aria-label="Github" rel="noreferrer noopener"><S.Git /></a>
              <a href="https://twitter.com/fsenaweb" target="_blank" aria-label="Twitter" rel="noreferrer noopener"><S.Twit /></a>
              <a href="http://www.instagram.com/fsenaweb" target="_blank" aria-label="Instagram" rel="noreferrer noopener"><S.Insta /></a>
              <a href="http://www.fb.me/fsenaweb" target="_blank" aria-label="Facebook" rel="noreferrer noopener"><S.Face /></a>
            </S.SocialMedia>
          </S.Description>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export default Header
