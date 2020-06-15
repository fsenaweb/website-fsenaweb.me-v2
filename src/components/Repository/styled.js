import styled from 'styled-components'
import BgHeader from '../../images/repository-bg.svg';

const fontFamily = 'Roboto, sans-serif'

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap');
  font-family: ${fontFamily};
  width: 99vw;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${BgHeader});
  background-position: bottom left;
  background-repeat: repeat-x;
  margin-bottom: 50px;
  
  @media(min-width: 1600px) {
    background-position: bottom center;
  }
`;

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap');
  font-family: ${fontFamily};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 85%;
  height: 680px;
  margin: 0 auto;
  
  @media(min-width: 1480px) {
    width: 1260px;
  }
  
  h1 {
    font-family: ${fontFamily};
    font-size: 40px;
    letter-spacing: -2px;
    margin: 20px 0;
    color: #fefefe;
    font-weight: 900;
  }
`;

export const IconRepository = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 790px;
`;

export const ListRepository = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55%;
  height: 790px;
`;

export const BoxRepository = styled.div`
  font-family: ${fontFamily};
  font-size: 1em;
  color: #FFF;
  width: 571px;
  height: 426px;
  border-radius: 10px;
  background-color: rgba(45, 40, 72, 1);
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 30px;
  
  & .repository-list {
    display: inline-block;
    width: 100%;
  }
  
  & img {
    margin: 5px 15px 20px 0;
    float: left;
  }
  
  & p.repository-name {
    margin-top: 15px;
    font-size: 20px;
    letter-spacing: 0px;
    line-height: 10px;
    color: #fefefe;
    font-weight: 300;
  }
  
  & p.repository-desc {
    font-size: 12px;
    line-height: 30px;
    color: #fefefe;
    font-weight: 300;
  }
 
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(39,37,62,0.3); 
    border-radius: 0 100px 100px 0;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 0 100px 100px 0;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }
`;
