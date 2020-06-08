import styled from 'styled-components'
import BgHeader from '../../images/header-bg.svg';

export const Wrapper = styled.div`
  width: 100vw;
  height: 768px;
  position: relative;
  background-image: url(${BgHeader});
  background-position: bottom;
  background-repeat: repeat-x;
`;

export const Logo = styled.h1`
  width: 40%;
  height: 50px;
  font-weight: bold;
  letter-spacing: -1px;
  color: #fff;
  padding: 30px 40px;
  
  & span {
    color: #638DB3;
  }
`;

export const Container = styled.div`
  width: 80%;
  height: 790px;
  margin: 0 auto;
`;

export const HeaderPhoto = styled.div`
  width: 592px;
  height: 688px;
  position: absolute;
  margin-left: 30px;
  bottom: -50px;
`


export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
