import styled, { keyframes } from 'styled-components'
import BgHeader from '../../images/header-bg.png';
import {device} from "../../styles/global";

import {
  LinkedinSquare,
  MediumSquare,
  InstagramAlt,
  FacebookSquare,
  Github,
  Twitter
} from '@styled-icons/boxicons-logos';
import {Menu} from '@styled-icons/boxicons-regular';
import { Close } from '@styled-icons/evaicons-solid'

const fontFamily = 'Roboto, sans-serif'

// ANIMATIONS
const rotateOpen = keyframes`
  from {
    transform: rotate(0deg);
    opacity: 1;
  }

  to {
    transform: rotate(90deg);
    opacity: 0;
  }
`;

const rotateClose = keyframes`
  from {
    transform: rotate(90deg);
    opacity: 0;
  }

  to {
    transform: rotate(0deg);
    opacity: 1;
  }
`;

const fadeImage = keyframes`
  0%{
    opacity: 0;
  }
  20%{
    opacity: 0.5;
  }
  40%{
    opacity: 1;
  }
  60%{
    opacity: 1;
  }
  80%{
    opacity: 0.5;
  }
  100%{
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  font-family: ${fontFamily};
  width: 99vw;
  height: 768px;
  position: relative;
  background-image: url(${BgHeader});
  background-position: bottom left;
  background-repeat: repeat-x;
  margin-bottom: 100px;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    background-image: linear-gradient(to bottom, #4c2b75, #2f2b4a);
    background-position: -50% 350%;
    height: 450px;
  }
  
  @media screen and (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 100vw;
    height: 600px;
    background-position: -40% 105%;
  }
  
  @media(min-width: ${device.laptopL}) {
    background-position: bottom center;
  }
  
`;

export const Container = styled.div`
  width: 85%;
  height: 790px;
  margin: 0 auto;
  padding-top: 20px;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 100%;
    height: 450px;
  }
  
  @media screen and (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 90%;
    height: 600px;
  }
  
  @media(min-width: ${device.laptopL}) {
    width: 1260px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  width: 40%;
  height: 50px;
  font-family: ${fontFamily};
  font-size: 2.5em;
  font-weight: 900;
  letter-spacing: -1.5px;
  color: #fff;
  padding: 30px 45px;
  
  & a {
    color: #fff;
    text-decoration: none;
    transition: color .3s ease;
    
    &:hover {
      color: #638DB3;
    }
  }
  
  & span {
    font-size: 0.7em;
    color: #638DB3;
    padding-top: 12px;
  }
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    font-size: 1.8em;
    padding: 15px;
  }
`;

export const FirstMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 2;
  width: 60%;
  height: 50px;
  font-family: ${fontFamily};
  font-weight: 900;
  letter-spacing: -1.5px;
  font-size: 1.5em;
  padding: 30px 45px;
  color: #FFFFFF;
  
  ul {
    list-style: none;
    
    li {
      display: inline;
      margin-left: 45px;
      
      & > img {
        margin-right: 20px;
      }
      
      a {
        position: relative;
        color: #fff;
        text-decoration: none;
        transition: color .2s ease;
        
        &:before, 
        &:after {
            display: block;
            position: absolute;
            width: 0;
            background-color: #fff;
            content:"";
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
            height:2px;
        }
        &:before {
            left: 0;
            top: -5px;
        }
        &:after {
            right: 0;
            bottom: -5px;
        }
        &:hover {
            color: #638DB3;
        }
        &:hover:after, 
        &:hover:before {
            width: 100%;
            height:2px;
        }
      }
    }
  }
  
  @media (max-width: ${device.laptopS}) {
    ul {
      display: none;
    }
  }
  
  @media(max-width: ${device.laptopM}) {
    padding: 15px 20px;
    ul li {
      margin-left: 25px;
    }
  }
  
`;

export const MobileMenu = styled(Menu)`
    width: 42px;
    height: 42px;
    color: white;
    transition: color .1s linear;
    display: ${props => (props.active ? 'none' : 'block')};
    animation: ${props => (props.active ? rotateOpen : rotateClose)} .1s linear;
    animation-direction: normal;
    
    &:active {
      cursor: pointer;
      color: #638DB3;
    }
    
    @media(min-width: ${device.laptopL}) {
      display: none;
    }
`;

export const CloseMenu = styled(Close)`
    width: 42px;
    height: 42px;
    color: white;
    display: ${props => (props.active ? 'block' : 'none')};
    transition: color .1s linear;
    animation: ${props => (props.active ? rotateOpen : rotateClose)} .1s linear;
    animation-direction: reverse;
    
    &:active {
      cursor: pointer;
      color: #638DB3;
    }
    
    @media(min-width: ${device.laptopL}) {
      display: none;
    }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 688px;
  position: relative;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    justify-content: flex-start;
    align-items: flex-start;
    height: 500px;
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    height: 500px;
  }
`;

export const HeaderPhoto = styled.div`
  width: 592px;
  height: 688px;
  margin-top: 50px;
  
  svg {
   animation: ${fadeImage} 10s ease-in infinite;
  }
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    display: none;
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 440px;
    height: 500px;
    margin-top: 0;
    
    svg {
      transform: scale(0.65);
      margin-top: -80px;
      margin-left: -80px;
    }
  }
`;

export const Description = styled.div`
  display: block;
  width: 85%;
  margin-left: 50px;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 100%;
    margin-left: 0;
    padding: 20px;
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    padding: 0;
    margin-left: 0;
  }
  
`;

export const DescriptionText = styled.div`
  width: 90%;
  height: auto;
  font-family: ${fontFamily};
  font-weight: 700;
  font-size: 2.5em;
  letter-spacing: -2px;
  line-height: 1.2em;
  color: #FFFFFF;
  margin-top: 100px;
  margin-bottom: 20px;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 100%;
    font-size: 1.8rem;
    margin-top: 20px;
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    font-size: 2rem;
    margin-top: 60px;
  }
  
`;

export const SkillText = styled.div`
  width: 90%;
  height: auto;
  font-family: ${fontFamily};
  font-weight: 300;
  font-size: 1.5em;
  letter-spacing: -1px;
  line-height: 1.5em;
  margin-bottom: 50px;
  color: #638DB3;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 100%;
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
  
  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    font-size: 1.2rem;
  }
  
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    align-items: flex-start;
  }
  
`;

export const Linkedin = styled(LinkedinSquare)`
  width: 40px;
  height: 40px;
  margin-left: 5px;
  color: white;
  transition: color .2s linear;
  
  &:hover {
    cursor: pointer;
    color: #638DB3;
  }
  
  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    margin-left: 0;
  }
`;

export const Medium = styled(MediumSquare)`
  width: 40px;
  height: 40px;
  margin-left: 5px;
  color: white;
  transition: color .2s linear;
  
  &:hover {
    cursor: pointer;
    color: #638DB3;
  }
`;

export const Insta = styled(InstagramAlt)`
  width: 40px;
  height: 40px;
  margin-left: 5px;
  color: white;
  transition: color .2s linear;
  
  &:hover {
    cursor: pointer;
    color: #638DB3;
  }
`;

export const Face = styled(FacebookSquare)`
  width: 40px;
  height: 40px;
  margin-left: 5px;
  color: white;
  transition: color .2s linear;
  
  &:hover {
    cursor: pointer;
    color: #638DB3;
  }
`;

export const Git = styled(Github)`
  width: 40px;
  height: 40px;
  margin-left: 5px;
  color: white;
  transition: color .2s linear;
  
  &:hover {
    cursor: pointer;
    color: #638DB3;
  }
`;

export const Twit = styled(Twitter)`
  width: 40px;
  height: 40px;
  margin-left: 5px;
  color: white;
  transition: color .2s linear;
  
  &:hover {
    cursor: pointer;
    color: #638DB3;
  }
`;
