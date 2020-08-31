import styled from 'styled-components'
import {device} from "../../styles/global";

const fontFamily = 'Roboto, sans-serif'

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap');
  font-family: ${fontFamily};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 99vw;
  height: 550px;
  position: relative;
  margin-bottom: 30px;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    font-size: 90%;
    height: auto;
  }
`;

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap');
  font-family: ${fontFamily};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 85%;
  height: 400px;
  margin: 0 auto;
  
  & > img {
    cursor: pointer;
  }
  
  & button {
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }
  
   @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 100%;
    height: auto;
   }
  
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
  margin-bottom: 20px;
`;


export const CarouselWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666a73;
  overflow: hidden;
  
  & > img {
    position: absolute;
    margin: 0 20px;
  }
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const CarouselCards = styled.div`
    display: flex;
    transition: transform 150ms ease-out;
    transform: translatex(0px);
    width: 100%;
    
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
  }
`;

export const Card = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap');
  width: 263px;
  min-width: 30%;
  height: 293px;
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), 0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 5x;
  z-index: 3;
  margin-bottom: 2px;
  border: 1px solid #ccc;
  margin-right: 45px;
  transition: 0.3s;
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  
  & img {
    width: 100%;
    height: 160px;
    margin-bottom: 15px;
    vertical-align: bottom;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    transition: opacity 150ms linear;
    user-select: none;
  }
  & img:hover {
    opacity: 0.5;
  }
  
  & a {
    text-decoration: none;
  }
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 100%;
    height: auto;
    margin: 0;
    margin-top: 20px;
    
    & img {
      height: 130px;
      margin-bottom: 5px;
      vertical-align: bottom;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      transition: opacity 150ms linear;
      user-select: none;
    }
    
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 160px;
  background-size: cover;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 10px;
`;

export const CardFooter = styled.div`
  border-top: 0;
  padding: 7px 15px;
  margin: 0;
  margin-bottom: 2px;
  font-size: 1.5em;
  font-weight: 700;
  color: #2c3e50;
  user-select: none;
  min-height: 50px;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    padding: 10px 15px;
    font-size: 1.3em;
  }
  
`;

export const SeeMore = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap');
  font-family: ${fontFamily}; 
  display: inline-block;
  width: 100%;
  font-size: 1.3em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 20px;
  text-decoration: none;
    
  & a{
    text-decoration: none;
    color: #000;
    font-weight: 900;
    transition: color .9s ease;
  }
  
  & a:hover {
    color: #828282;
  }
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 75%;
    font-size: 1.1em;
  }
`;
