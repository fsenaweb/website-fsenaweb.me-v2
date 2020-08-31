import React from 'react';

import * as S from './styled'

const Card = (props) => {
  return (
    <S.Card>
      <a href={props.url} target="_blank" rel="noreferrer noopener">
        <S.Image url={props.image} />
        <S.CardFooter>
          {props.title}
        </S.CardFooter>
      </a>
    </S.Card>

)
  ;
}

export default Card;
