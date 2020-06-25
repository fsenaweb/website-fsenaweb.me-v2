import styled from 'styled-components'
import {device} from "../../styles/global";
import BGPersonal from './../../images/personal-bg.png'

const fontFamily = 'Roboto, sans-serif'

export const Wrapper = styled.div`
  font-family: ${fontFamily}; 
  width: 99vw;
  height: 858px;
  position: relative;
  background-image: url(${BGPersonal});
  background-position: center;
  background-repeat: repeat-x;
  margin-bottom: 50px;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    background-image: linear-gradient(to bottom, #4c2b75, #2f2b4a);
    background-position: -50% 350%;
    height: auto;
    margin-bottom: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 85%;
  height: 100%;
  margin: 0 auto;
  
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 100%;
    height: auto;
  }
  
  @media(min-width: ${device.laptopL}) {
    width: 1260px;
  }
`;

export const BoxDescription = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 470px;
  position: relative;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const TextDescription = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  padding: 60px 10px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  font-family: ${fontFamily};
  
  & p {
    font-size: 1.45em;
    color: #ffffff;
    line-height: 1.1em;
    font-weight: 300;
    
    
    &:first-child {
      margin-bottom: 20px;
    }
  }
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 100%;
    padding: 20px;
    border: 1px solid red;
    
    & p {
      font-size: 1.1em;
      color: #ffffff;
      line-height: 1.1em;
      font-weight: 300;
    }
  }
`;

export const ImageDescription = styled.div`
  width: 40%;
  height: auto;
  padding-top: 20px;
  
  & img {
    max-width: 450px;
  }
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 70%;
    border: 1px solid red;
    & img {
      max-width: 100%;
    }
  }
`;

export const BoxExperience = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  
`;

export const Title = styled.h1`
  font-family: ${fontFamily}; 
  font-size: 1.9em;
  letter-spacing: -1px;
  color: #FFFFFF;
  font-weight: 900;
  text-align: left;
  margin-bottom: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  width: 33%;
  height: 200px;
  float: left;
`;

export const Ano = styled.div`
  position: absolute;
  z-index: 1;
  font-size: 9.3em;
  letter-spacing: -7px;
  color: #0a0a0a;
  opacity: 0.15;
  font-weight: 900;
`;

export const Cargo = styled.p`
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  font-size: 1.4em;
  letter-spacing: -0.5px;
  line-height: 30px;
  color: #ffffff;
  font-weight: 900;
`;

export const Empresa = styled.p`
  position: relative;
  z-index: 1;
  font-size: 1.2em;
  letter-spacing: -0.5px;
  color: #ffffff;
  font-weight: 500;
`;
export const Local = styled.p`
  position: relative;
  z-index: 1;
  font-size: 1em;
  letter-spacing: -0.5px;
  line-height: 30px;
  color: #ffffff;
  font-weight: 900;
`;
