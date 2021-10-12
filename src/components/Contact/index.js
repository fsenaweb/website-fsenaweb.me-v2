import React from "react"
import "react-toastify/dist/ReactToastify.min.css"

import * as S from "./styled"
import * as SocialIcon from "../Header/styled"
import { useTranslation } from "react-i18next"

const Contact = () => {
  const { t } = useTranslation()
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>{t("home.contact")}</S.Title>
        <S.ContainerForm>
          <S.FormInfo>
            <h2>
              <a href="tel:84999959215">+55 84 99995-9216</a>
              <a href="mailto:contato@fsenaweb.me">contato@fsenaweb.me</a>
            </h2>
            <SocialIcon.SocialMedia>
              <a
                href="http://www.linkedin.com/in/fsenaweb"
                aria-label="Linkedin"
                target="_blank"
                rel="noreferrer noopener"
              >
                <S.IconLinkedin />
              </a>
              <a
                href="https://medium.com/@fsenaweb"
                target="_blank"
                aria-label="Medium"
                rel="noreferrer noopener"
              >
                <S.IconMedium />
              </a>
              <a
                href="https://dev.to/fsenaweb"
                target="_blank"
                aria-label="Medium"
                rel="noreferrer noopener"
              >
                <S.IconDevTo />
              </a>
              <a
                href="https://github.com/fsenaweb/"
                target="_blank"
                aria-label="Github"
                rel="noreferrer noopener"
              >
                <S.IconGit />
              </a>
              <a
                href="https://twitter.com/fsenaweb"
                target="_blank"
                aria-label="Twitter"
                rel="noreferrer noopener"
              >
                <S.IconTwit />
              </a>
            </SocialIcon.SocialMedia>
          </S.FormInfo>
        </S.ContainerForm>
      </S.Container>
    </S.Wrapper>
  )
}

export default Contact
