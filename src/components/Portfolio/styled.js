import styled from 'styled-components';
import {device} from "../../styles/global";

const fontFamily = 'Roboto, sans-serif'

export const Wrapper = styled.div`
  font-family: ${fontFamily}; 
  width: 99vw;
  min-height: 800px;
  background-position: bottom;
  background-size: 70%;
  background-repeat: repeat-x;
  margin-bottom: 40px;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    height: auto;
  }
 
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 100%;
    height: auto;
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 95%;
    height: auto;
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
  margin-bottom: 40px;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.laptopS}) {
    font-size: 2.1em;
    margin-bottom: 30px;
  }
`;

export const BoxRepository = styled.div`
  width: 100%;
  display: inline-block;
  
   @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 95%;
   }
`;

export const CardRepository = styled.div`
  display: flex;
  width: 100%;
  margin: 30px 0;
  padding: 10px;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), 0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  border: 1px solid #ccc;
  
  & img {
    width: 100px;
    height: 100px;
    margin-right: 30px;
  }
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    margin: 20px 0;
    
    & img {
      width: 70px;
      height: 70px;
      margin-right: 15px;
    }
  }
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  & p {
    margin: 0;
    margin-bottom: 10px;
    font-size: 19px;
    font-weight: 500;
    color: #2c3e50;
    user-select: none;
    
    &:first-child {
      font-size: 1.5em;
      font-weight: 900;
    }

    &:last-child {
      font-size: 1.2em;
      font-weight: 300;
    }
  }
  
  & a {
    color: #000;
    text-decoration: none;
    transition: color .3s linear;
    
    &:hover {
      color: #2c3e50;
    }
  }
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
  
    & p {
      margin-bottom: 8px;
      font-size: 19px;
      font-weight: 500;
      color: #2c3e50;
      user-select: none;
      
      &:first-child {
        font-size: 1.2em;
        font-weight: 700;
      }
  
      &:last-child {
        font-size: .9em;
        font-weight: 300;
      }
    }
    
  }
  
`;
