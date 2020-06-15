import styled from "styled-components"

const fontFamily = 'Roboto, sans-serif'

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap');
  font-family: ${fontFamily};
  width: 99vw;
  height: 650px;
  position: relative;
  
`;

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap');
  font-family: ${fontFamily};
  width: 85%;
  height: 700px;
  margin: 0 auto;
  padding-top: 20px;
  
  @media(min-width: 1480px) {
    width: 1260px;
  }
`;

export const Title = styled.h1`
  font-family: ${fontFamily}; 
  font-size: 2.5em;
  letter-spacing: -2px;
  color: #638db3;
  font-weight: 900;
  text-align: center;
  margin-bottom: 70px;
`;

export const ListHability = styled.div`
  width: 110px;
  height: 180px;
  margin: 0 48px;
  font-size: 20px;
  letter-spacing: -1px;
  line-height: 30px;
  text-align: center;
  color: #010101;
  font-family: ${fontFamily}; 
  font-weight: 700;
  float: left
`;
