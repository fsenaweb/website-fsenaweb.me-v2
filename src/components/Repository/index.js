import React, { useState, useEffect } from 'react'
import axios from 'axios'
import iconRepository from '../../images/repository-icon.png'
import iconRepositoryRepos from '../../images/repository-repos.png'

import * as S from './styled'

const Repository = () => {

  const [ repositories, setRepositories] = useState([])

  const fetchData = async () => {
    await axios.get('https:api.github.com/users/fsenaweb/repos')
      .then(response => {
        const filtered = response.data.filter(item => item.fork === false)
        setRepositories(filtered)
        console.log(filtered)
      })
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.IconRepository>
          <a href="https://github.com/fsenaweb/" target="_blank" rel="noreferrer noopener">
            <S.IconGit />
          </a>
          <h1>Repositórios</h1>
        </S.IconRepository>
        <S.ListRepository>
          <S.BoxRepository>
          { repositories.map(item => (
            <div key={item.id} className="repository-list">
              <img src={iconRepositoryRepos} alt={item.name}/>
              <p className="repository-name">
                <a href={item.html_url} target="_blank" rel="noreferrer noopener">{ item.name }</a>
              </p>
              <p className="repository-desc">{ item.description }</p>
            </div>
          ))}
          </S.BoxRepository>
        </S.ListRepository>
      </S.Container>
    </S.Wrapper>
  )

}

export default Repository
