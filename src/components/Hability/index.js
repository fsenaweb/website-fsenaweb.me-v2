import React from "react"
import { icons } from "./icon"
import * as S from "./styled"
import { useTranslation } from "react-i18next"

const Hability = () => {
  const { t } = useTranslation()
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>{t("home.skills")}</S.Title>
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
      </S.Container>
    </S.Wrapper>
  )
}
export default Hability
