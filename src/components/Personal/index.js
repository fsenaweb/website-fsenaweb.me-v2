import React from "react"
import PersonalPhoto from "./../../images/personal-photo.png"
import CardExperience from "../../components/Personal/CardExperience.tsx"

import * as S from "./styled"
import { useTranslation } from "react-i18next"

const Index = () => {
  const { t } = useTranslation()
  return (
    <div>
      <S.Wrapper>
        <S.Container>
          <S.BoxDescription>
            <S.TextDescription>
              <p>{t("home.experience.first-description")}</p>
              <p>{t("home.experience.second-description")}</p>
            </S.TextDescription>
            <S.ImageDescription url={PersonalPhoto} />
          </S.BoxDescription>
          <S.BoxExperience>
            <S.Title>{t("home.experience.last")}</S.Title>
            <CardExperience
              ano={2021}
              cargo={"Frontend developer"}
              empresa={"IZA.com.vc "}
              local={"São Paulo/SP - Brasil"}
            />
            <CardExperience
              ano={2021}
              cargo={"Frontend developer"}
              empresa={"Flapper"}
              local={"Belo Horizonte/MG - Brasil"}
            />
            <CardExperience
              ano={2020}
              cargo={"Web System Developer"}
              empresa={"Joyjet Digital Space Agency"}
              local={"Paris - França"}
            />
          </S.BoxExperience>
        </S.Container>
      </S.Wrapper>
    </div>
  )
}

export default Index
