import styled from 'styled-components';
import BGContact from "../../images/contact-bg.png";
import {device} from "../../styles/global";
import { Linkedin, Medium, Git, Twit, Insta, Face }from '../Header/styled'

const fontFamily = 'Roboto, sans-serif'

export const Wrapper = styled.div`
  font-family: ${fontFamily}; 
  width: 99vw;
  height: 750px;
  position: relative;
  background-image: url(${BGContact});
  background-position: bottom;
  background-size: 70%;
  background-repeat: repeat-x;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    height: auto;
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 100%;
    height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 100%;
    height: auto;
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 100%;
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
  margin-bottom: 80px;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.laptopS}) {
    font-size: 2.1em;
    margin-bottom: 30px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 500px;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 100%;
    height: auto;
    justify-content: space-around;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 95%;
    justify-content: space-around;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  
`;

export const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  padding: 50px 25px;
  
  & h1 {
    font-size: 1.45em;
    letter-spacing: -1px;
    line-height: 1.1em;
    color: #333333;
    font-weight: 700;
    margin-bottom: 50px;
  }
  
  & h2 {
    font-size: 2.5em;
    letter-spacing: -2px;
    line-height: 1.2em;
    margin-bottom: 50px;
    font-weight: 900;
    
    & a {
      color: #606060;
      text-decoration: none;
      display: block;
      transition: color .3s linear;
      
      &:hover {
        color: #000000;
      } 
    }
  }
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 95%;
    height: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    
    & h1 {
      font-size: 1.1em;
      letter-spacing: -1px;
      line-height: 1em;
      text-align: center;
      margin-bottom: 30px;
    }
    
    & h2 {
      font-size: 1.7em;
      letter-spacing: -1px;
      line-height: 1.1em;
      text-align: center;
      margin-bottom: 30px;
    }
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
     & h2 {
      font-size: 2em;
    }
  }
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 30px 45px;
  background-color: rgba(190,190,190,0.07);
  border-radius: 5px;
  
  input[type="text"], input[type="email"], input[type="tel"] {
    width: 100%;
    height: 55px;
    margin: 10px 0;
    padding: 10px 20px;
    border-radius: 7px;
    font-size: 1.3em;
    font-weight: 300;
    background-color: #ffffff;
    border: 1px solid #e4e4e4;
    outline: none;
    
    &::placeholder{
      font-size: .9em;
      letter-spacing: -1px;
      color: #d2d2d2;
      font-weight: 300;
    }
  }
  
  input[type="submit"] {
    width: 100%;
    height: 50px;
    border-radius: 7px;
    border: none;
    background-color: #4d2b78;
    font-size: 1em;
    letter-spacing: -0.5px;
    color: #ffffff;
    font-weight: 400;
    transition: background-color .2s ease-in;
    
    &:hover {
      cursor: pointer;
      background-color: #28173b;
    }
  }
  
  textarea {
    width: 100%;
    height: 130px;
    margin: 10px 0 15px;
    padding: 20px;
    border-radius: 7px;
    font-size: 1.3em;
    font-weight: 300;
    background-color: #ffffff;
    border: 1px solid #e4e4e4;
    outline: none;
    
     &::placeholder{
      font-size: 1em;
      letter-spacing: -1px;
      color: #d2d2d2;
      font-weight: 300;
    }
  }
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 95%;
    padding: 30px 20px;
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 50%;
    height: auto;
    justify-content: center;
    align-items: center;
  }
`;

export const IconLinkedin = styled(Linkedin)`
  color: #606060;
  transition: color .2s linear;
  
  &:hover {
    cursor: pointer;
    color: #638DB3;
  }
`;

export const IconMedium = styled(Medium)`
  color: #606060;
  transition: color .2s linear;
  
  &:hover {
    cursor: pointer;
    color: #638DB3;
  }
`;

export const IconInsta = styled(Insta)`
  color: #606060;
  transition: color .2s linear;
  
  &:hover {
    cursor: pointer;
    color: #638DB3;
  }
`;

export const IconFace = styled(Face)`
  color: #606060;
  transition: color .2s linear;
  
  &:hover {
    cursor: pointer;
    color: #638DB3;
  }
`;

export const IconGit = styled(Git)`
  color: #606060;
  transition: color .2s linear;
  
  &:hover {
    cursor: pointer;
    color: #638DB3;
  }
`;

export const IconTwit = styled(Twit)`
  color: #606060;
  transition: color .2s linear;
  
  &:hover {
    cursor: pointer;
    color: #638DB3;
  }
`;

