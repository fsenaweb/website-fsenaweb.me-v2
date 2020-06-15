import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Card from './Card'

import iconLeft from './../../images/icon-arrow-left.png'
import iconRigth from './../../images/icon-arrow-rigth.png'

import * as S from './styled'

const Publication = () => {

  const [articles, setArticles] = useState([])
  const [currentOffset, setCurrentOffset ] = useState(0)
  const [windowSize] = useState(3)
  const [paginationFactor] = useState(395)

  const loadMediumRepositories = async () => {
    try {
      const mediumRssFeed = 'https://dev.to/api/articles?username=fsenaweb'
      await axios.get(mediumRssFeed)
        .then(response => {
          setArticles(response.data)
        })
    } catch (error) {
      console.error(error)
    }
  }

  const atEndOfList = () => {
    return currentOffset <= (paginationFactor * -1) * (articles.length - windowSize)
  };

  const atHeadOfList = () => {
    return currentOffset !== 0
  }

  const moveCarousel = (direction) => {
    if (direction === 1) {
      if (!atEndOfList()) {
        setCurrentOffset(currentOffset - paginationFactor)
      }
    } else if (direction === -1) {
      if (atHeadOfList()){
        setCurrentOffset(currentOffset + paginationFactor)
      }
    }
  }

  useEffect(() => {
    loadMediumRepositories()
  }, [])

  return (
    <S.Wrapper>
      <S.Title>Publicações</S.Title>
      <S.Container>
        <button onClick={() => moveCarousel(-1)}
             style={{ visibility: atHeadOfList() ? 'visible' : 'hidden' }}>
          <img src={iconLeft} alt="Mover para esquerda"/>
        </button>
        <S.CarouselWrapper>
          <S.CarouselCards style={{transform: `translateX(${currentOffset}px)`}}>
            {articles.map(({title, canonical_url, cover_image}) => (
              <Card key={title} title={title} url={canonical_url} image={cover_image}/>
            ))}
            <Card/>
          </S.CarouselCards>
        </S.CarouselWrapper>
        <button onClick={() => moveCarousel(1)}
             style={{ visibility: atEndOfList() ? 'hidden' : 'visible' }}>
          <img src={iconRigth} alt="Mover para direita"/>
        </button>
      </S.Container>
      <S.SeeMore>
        Veja outros artigos e publicações em
        <a href="https://medium.com/@fsenaweb" rel="noreferrer noopener" target="_blank"> Medium</a> |
        <a href="https://dev.to/fsenaweb" rel="noreferrer noopener" target="_blank"> Dev.to</a>
      </S.SeeMore>
    </S.Wrapper>
  );
}

export default Publication;
