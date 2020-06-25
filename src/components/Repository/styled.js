import styled from 'styled-components'
import {device} from "../../styles/global";

import {
  Github,
} from '@styled-icons/boxicons-logos';

const fontFamily = 'Roboto, sans-serif'

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap');
  font-family: ${fontFamily};
  width: 99vw;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: linear-gradient(to bottom, #4c2b75, #2f2b4a);
  margin-bottom: 30px;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    height: auto;
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 100%;
    height: 550px;
  }
  
`;

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap');
  font-family: ${fontFamily};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 85%;
  height: 600px;
  margin: 0 auto;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
     flex-direction: column;
     justify-content: center;
     align-items: center;
     width: 95%;
     height: auto;
     padding: 20px 0;
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 95%;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  @media(min-width: ${device.laptopL}) {
    width: 1260px;
  }
  
`;

export const IconRepository = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  
  & a:hover {
    color: yellow;
  }
  
  h1 {
    font-family: ${fontFamily};
    font-size: 40px;
    letter-spacing: -2px;
    margin: 20px 0;
    color: #fefefe;
    font-weight: 900;
  }
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 100%;
    
    & > h1 {
      font-family: ${fontFamily};
      font-size: 30px;
      letter-spacing: -1px;
      margin: 10px 0;
      color: #fefefe;
      font-weight: 700;
    }
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 25%;
    height: auto;
    margin: 20px;
    
    & > h1 {
      font-family: ${fontFamily};
      font-size: 20px;
      letter-spacing: -1px;
      margin: 10px 0;
      color: #fefefe;
      font-weight: 700;
    }
  }
`;

export const IconGit = styled(Github)`
  width: 340px;
  height: 340px;
  color: white;
  transition: color .2s linear;
  
  &:hover {
    cursor: pointer;
    color: yellow;
  }
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 140px;
    height: 140px;
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 220px;
    height: 220px;
  }
`;

export const ListRepository = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100%;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 100%;
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 65%;
    height: auto;
    justify-content: center;
    align-items: center;
  }
`;

export const BoxRepository = styled.div`
  font-family: ${fontFamily};
  font-size: 1em;
  color: #FFF;
  width: 571px;
  height: 380px;
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
    padding-top: 13px;
    font-size: 20px;
    letter-spacing: 0px;
    line-height: 10px;
    color: #fefefe;
    font-weight: 300;
    
    & > a {
      color: #fff;
      text-decoration: none;
      transition: color .3s ease-in;
      
      &:hover {
        color: yellow;
      }
      
      &:active {
        color: #FFF;
      }
    }
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
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 95%;
    padding: 15px;
    background-color: #4f3272;
    margin: 10px 0;
    
    & img {
      margin: 5px 15px 20px 0;
      float: left;
    }
  
    & p.repository-name {
      padding-top: 13px;
      font-size: 16px;
      letter-spacing: 0px;
      line-height: 10px;
      color: #fefefe;
      font-weight: 900;
      
    }
    
    & p.repository-desc {
      font-size: 12px;
      line-height: 30px;
      color: #fefefe;
      font-weight: 300;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: auto;
    height: 430px;
    
  }
`;
