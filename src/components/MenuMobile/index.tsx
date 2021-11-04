import * as React from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

const flagBR = require("../../images/flag-BR.png")

const flagUSA = require("../../images/flag-USA.png")

import * as S from "./styled"

const MenuMobile: React.FC = () => {
  const { t, i18n } = useTranslation()

  function handleChange(language) {
    i18n.changeLanguage(language)
  }

  const [close, setClose] = useState(false)
  const [bodyOffset, setBodyOffset] = useState({ top: 0 })
  const [scrollY, setScrollY] = useState(bodyOffset.top)

  const toggleMenu = (): void => {
    setClose(!close)
  }

  const listener = e => {
    setBodyOffset(document.body.getBoundingClientRect())
    setScrollY(-bodyOffset.top)
  }

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  })

  return (
    <div>
      <S.MobileMenu
        onClick={() => toggleMenu()}
        active={close}
        position={scrollY}
      />
      <S.CloseMenu
        onClick={() => toggleMenu()}
        active={close}
        position={scrollY}
      />
      <S.MenuIn isOpen={close}>
        <S.Logo>
          <Link to="/">
            fsenaweb<span>.dev</span>
          </Link>
        </S.Logo>
        <S.LangButton>
          <button onClick={() => handleChange("pt-BR")}>
            <img alt="Idioma Português" src={flagBR} />
          </button>
          <button onClick={() => handleChange("en")}>
            <img alt="English language" src={flagUSA} />
          </button>
        </S.LangButton>
        <S.MenuList to="/" onClick={() => toggleMenu()}>
          Home
        </S.MenuList>
        <S.MenuList to="/quem-sou" onClick={() => toggleMenu()}>
          {t("menu.how-i-am")}
        </S.MenuList>
        <S.MenuList to="/portfolio" onClick={() => toggleMenu()}>
          {t("menu.portfolio")}
        </S.MenuList>
      </S.MenuIn>
    </div>
  )
}

export default MenuMobile
