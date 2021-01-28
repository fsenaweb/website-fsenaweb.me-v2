import * as React from "react"
import { icons } from "../Hability/icon"
import * as S from "./styled"
import { useTranslation } from "react-i18next"

const PersonalPhoto = require("./../../images/personal-photo.png")

const About: React.FC = () => {
  const { t } = useTranslation()
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>{t("how.title")}</S.Title>
        <S.ContainerAbout>
          <S.AboutInfo>
            <img src={PersonalPhoto} alt="Foto Currículo" />
            <h1>{t("how.academic")}</h1>
            <p>{t("how.course")}</p>

            <h2>{t("how.skills")}</h2>
            <ul>
              <li>{t("how.skill1")}</li>
              <li>{t("how.skill2")}</li>
              <li>{t("how.skill3")}</li>
              <li>{t("how.skill4")}</li>
            </ul>
          </S.AboutInfo>
          <S.AboutText>
            <p>{t("how.first-description")}</p>

            <p>{t("how.second-description")}</p>

            <p>{t("how.third-description")}</p>

            <S.ContainerHability>
              {icons.map((item, i) => {
                return (
                  <S.ListHability key={i}>
                    <img src={item.image} alt={item.title} />
                    {item.title}
                  </S.ListHability>
                )
              })}
            </S.ContainerHability>
          </S.AboutText>
        </S.ContainerAbout>
      </S.Container>
    </S.Wrapper>
  )
}

export default About
