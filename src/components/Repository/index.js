import React, { useState, useEffect } from "react"
import axios from "axios"
import iconRepositoryRepos from "../../images/repository-repos.png"
import { useTranslation } from "react-i18next"

import * as S from "./styled"

const Repository = () => {
  const { t } = useTranslation()
  const [repositories, setRepositories] = useState([])
  const [expand, setExpand] = useState(false)

  const fetchData = async () => {
    await axios
      .get("https://api.github.com/users/fsenaweb/repos")
      .then(response => {
        const filtered = response.data.filter(item => item.fork === false)
        setRepositories(filtered)
      })
  }

  const openRepository = () => {
    setExpand(!expand)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <S.Wrapper>
      <S.Container>
        <S.IconRepository>
          <S.IconGit />
          <h1>{t("home.repositories")}</h1>
        </S.IconRepository>
        <S.ListRepository>
          <S.BoxRepository>
            {repositories.map(item => (
              <div key={item.id} className="repository-list">
                <img src={iconRepositoryRepos} alt={item.name} />
                <p className="repository-name">
                  <a
                    href={item.html_url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {item.name}
                  </a>
                </p>
                <p className="repository-desc">{item.description}</p>
              </div>
            ))}
          </S.BoxRepository>
        </S.ListRepository>
        <S.ListRepositoryMobile>
          <S.BoxRepositoryMobile expand={expand}>
            {repositories.map(item => (
              <div key={item.id} className="repository-list">
                <img src={iconRepositoryRepos} alt={item.name} />
                <p className="repository-name">
                  <a
                    href={item.html_url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {item.name}
                  </a>
                </p>
                <p className="repository-desc">{item.description}</p>
              </div>
            ))}
          </S.BoxRepositoryMobile>
        </S.ListRepositoryMobile>
        <S.SeeMoreText onClick={() => openRepository()}>
          {expand ? t("home.see-less") : t("home.see-more")}
        </S.SeeMoreText>
      </S.Container>
    </S.Wrapper>
  )
}

export default Repository
