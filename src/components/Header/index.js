import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import { withTrans } from "../../i18n/withTrans"

import MenuMobile from "../MenuMobile"

import Photo from "./photo"
import flagBR from "../../images/flag-BR.png"
import flagUSA from "../../images/flag-USA.png"

import GlobalStyles from "../../styles/global"
import * as S from "./styled"

const Header = props => {
  const { t, i18n } = useTranslation()

  function handleChange(language) {
    i18n.changeLanguage(language)
  }

  return (
    <S.Wrapper>
      <GlobalStyles />
      <S.Container>
        <S.Top>
          <S.Logo>
            <Link to="/">
              fsenaweb<span>.me</span>
            </Link>
          </S.Logo>
          <S.FirstMenu>
            <ul>
              <li>
                <Link to="/quem-sou">{t("menu.how-i-am")}</Link>
              </li>
              <li>
                <Link to="/portfolio">{t("menu.portfolio")}</Link>
              </li>
              <li>
                <button onClick={() => handleChange("pt-BR")}>
                  <img alt="Idioma Português" src={flagBR} />
                </button>
                <button onClick={() => handleChange("en")}>
                  <img alt="English language" src={flagUSA} />
                </button>
              </li>
            </ul>
          </S.FirstMenu>
          <MenuMobile />
        </S.Top>
        <S.Content>
          <S.HeaderPhoto>
            <Photo />
          </S.HeaderPhoto>
          <S.Description>
            <S.DescriptionText>
              Matheus Ricelly <br />
              Front-end Software Engineer
            </S.DescriptionText>
            <S.SkillText>
              Progressive Web App - Landing Page - Single Page Application -
              Mobile App
            </S.SkillText>
            <S.SocialMedia>
              <a
                href="http://www.linkedin.com/in/fsenaweb"
                aria-label="Linkedin"
                target="_blank"
                rel="noreferrer noopener"
              >
                <S.Linkedin />
              </a>
              <a
                href="https://medium.com/@fsenaweb"
                target="_blank"
                aria-label="Medium"
                rel="noreferrer noopener"
              >
                <S.Medium />
              </a>
              <a
                href="https://dev.to/fsenaweb"
                target="_blank"
                aria-label="Medium"
                rel="noreferrer noopener"
              >
                <S.Dev />
              </a>
              <a
                href="https://github.com/fsenaweb/"
                target="_blank"
                aria-label="Github"
                rel="noreferrer noopener"
              >
                <S.Git />
              </a>
              <a
                href="https://twitter.com/fsenaweb"
                target="_blank"
                aria-label="Twitter"
                rel="noreferrer noopener"
              >
                <S.Twit />
              </a>
              <a
                href="http://www.instagram.com/fsenaweb"
                target="_blank"
                aria-label="Instagram"
                rel="noreferrer noopener"
              >
                <S.Insta />
              </a>
              <a
                href="http://www.fb.me/fsenaweb"
                target="_blank"
                aria-label="Facebook"
                rel="noreferrer noopener"
              >
                <S.Face />
              </a>
            </S.SocialMedia>
          </S.Description>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export default withTrans(Header)
