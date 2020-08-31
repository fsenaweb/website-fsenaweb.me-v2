import * as React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";

import Publication from './../Publication'

const iconRepositoryRepos = require('./../../images/repository.png')

import * as S from './styled';

const Portfolio = () => {

  const [ repositories, setRepositories] = useState([])

  const fetchData = async () => {
    await axios.get('https://api.github.com/users/fsenaweb/repos')
      .then(response => {
        const filtered = response.data.filter(item => item.fork === false)
        setRepositories(filtered)
      })
  }

  useEffect(() => {
    fetchData()
  }, []);


  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Portfólio</S.Title>
        <Publication/>
        <S.BoxRepository>
          <S.Title>Repositórios</S.Title>
          { repositories.map(item => (
            <S.CardRepository key={item.id}>
                <img src={iconRepositoryRepos} alt={item.name}/>
                <S.CardDescription>
                  <p>
                    <a href={item.html_url}
                        target="_blank"
                        rel="noreferrer noopener">
                    { item.name }
                    </a>
                  </p>
                  <p>{ item.description }</p>
                </S.CardDescription>

            </S.CardRepository>
          ))}
        </S.BoxRepository>
      </S.Container>
    </S.Wrapper>
  );
};

export default Portfolio;
