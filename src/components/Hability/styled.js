import styled from "styled-components"
import { device } from "../../styles/global";

const fontFamily = 'Roboto, sans-serif'

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap');
  font-family: ${fontFamily};
  width: 99vw;
  height: 650px;
  position: relative;
  margin-bottom: 70px;
  
  @media (min-width: ${device.mobileS})  and (max-width: ${device.laptopS}) {
    margin-bottom: 0;
    height: 100%;
  
  }
`;

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap');
  font-family: ${fontFamily};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 85%;
  height: 650px;
  margin: 0 auto;
  padding-top: 20px;
  
  @media (min-width: ${device.mobileS})  and (max-width: ${device.laptopS}) {
    width: 90%;
    height: auto;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;
  }
  
  @media(min-width: ${device.laptopL}) {
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
  margin-bottom: 80px;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.laptopS}) {
    font-size: 2.1em;
    margin-bottom: 30px;
  }
`;

export const ContainerHability = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 80%;
  height: 500px;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 98%;
    height: auto;
    justify-content: space-around;
    margin: 0 auto;
  }
  
  @media screen and (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 95%;
    justify-content: space-around;
    margin: 0 auto;
  }
  
`;

export const ListHability = styled.div`
  flex-basis: auto;
  width: 110px;
  height: 190px;
  margin-left: 49px;
  font-size: 20px;
  letter-spacing: -1px;
  line-height: 30px;
  text-align: center;
  color: #010101;
  font-family: ${fontFamily}; 
  font-weight: 700;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 80px;
    height: 120px;
    margin: 12px;
    
    font-size: 95%;
    
    & img {
      width: 100%;
    }
  }
  
  @media screen and (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 100px;
    height: 135px;
    margin: 12px;
    font-size: 17px;
    
    & img {
      width: 100%;
    }
  }
  
  @media(min-width: ${device.laptopL}) {
  }
  
`;
