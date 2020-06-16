import styled from 'styled-components'
import BgHeader from '../../images/header-bg.png';

import { LinkedinSquare, MediumSquare, InstagramAlt, FacebookSquare, Github, Twitter } from '@styled-icons/boxicons-logos';

const fontFamily = 'Roboto, sans-serif'

export const Wrapper = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap');
  font-family: ${fontFamily};
  width: 99vw;
  height: 768px;
  position: relative;
  background-image: url(${BgHeader});
  background-position: bottom left;
  background-repeat: repeat-x;
  margin-bottom: 100px;
  
  @media(min-width: 1600px) {
    background-position: bottom center;
  }
`;

export const Container = styled.div`
  width: 85%;
  height: 790px;
  margin: 0 auto;
  padding-top: 20px;
  
  @media(min-width: 1480px) {
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
  & span {
    font-size: 0.7em;
    color: #638DB3;
    padding-top: 10px;
  }
`;

export const Menu = styled.div`
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
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 688px;
  position: relative;
`;

export const HeaderPhoto = styled.div`
  width: 592px;
  height: 688px;
  margin-top: 50px;
`;

export const Description = styled.div`
  display: block;
  width: 85%;
  margin-left: 50px;
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
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  padding-left: 80px;
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
`

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
`

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
`

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
`

export const Git = styled(Github)`
  width: 35px;
  height: 35px;
  margin-left: 5px;
  color: white;
  transition: color .2s linear;
  
  &:hover {
    cursor: pointer;
    color: #638DB3;
  }
`

export const Twit = styled(Twitter)`
  width: 35px;
  height: 35px;
  margin-left: 5px;
  color: white;
  transition: color .2s linear;
  
  &:hover {
    cursor: pointer;
    color: #638DB3;
  }
`
