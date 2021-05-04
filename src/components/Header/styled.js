import styled, { keyframes } from "styled-components"
import media from "styled-media-query"
import BgHeader from "../../images/header-bg.png"

import {
  LinkedinSquare,
  MediumSquare,
  InstagramAlt,
  FacebookSquare,
  Github,
  Twitter,
  DevTo,
} from "@styled-icons/boxicons-logos"

const fontFamily = "Roboto, sans-serif"

// ANIMATIONS
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
`

export const Wrapper = styled.div`
  width: 100%;
  height: 768px;
  position: relative;
  background-image: url(${BgHeader});
  background-position: bottom left;
  background-repeat: repeat-x;
  margin-bottom: 100px;

  ${media.between("medium", "large")`
    width: 100vw;
    height: 590px;
    background-position: -40% 105%;
    margin-bottom: 30px;
  `};

  ${media.lessThan("medium")`
    background-image: linear-gradient(to bottom, #4c2b75, #2f2b4a);
    background-position: -50% 350%;
    height: 380px;
    margin-bottom: 30px;
  `};

  ${media.greaterThan("large")`
    background-position: bottom center;
  `};
`

export const Container = styled.div`
  width: 85%;
  height: 790px;
  margin: 0 auto;
  padding-top: 20px;

  ${media.lessThan("medium")`
    width: 100%;
    height: 450px;
  `};

  ${media.between("medium", "large")`
    width: 90%;
    height: 600px;
  `};

  ${media.greaterThan("large")`
    width: 1260px;
  `};
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

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
    transition: color 0.3s ease;

    &:hover {
      color: #638db3;
    }
  }

  & span {
    font-size: 0.7em;
    color: #638db3;
    padding-top: 12px;
  }

  ${media.lessThan("medium")`
    font-size: 1.8em;
    padding: 15px;
  `};
`

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
  color: #ffffff;

  button {
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

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
        transition: color 0.2s ease;

        &:before,
        &:after {
          display: block;
          position: absolute;
          width: 0;
          background-color: #fff;
          content: "";
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          height: 2px;
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
          color: #638db3;
        }
        &:hover:after,
        &:hover:before {
          width: 100%;
          height: 2px;
        }
      }
    }
  }

  ${media.lessThan("medium")`
    ul {
      display: none;
    }
  `};

  ${media.between("medium", "huge")`
    padding: 15px 20px;
    ul li {
      margin-left: 25px;
    }
  `};
`

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 688px;
  position: relative;

  ${media.lessThan("medium")`
    justify-content: flex-start;
    align-items: flex-start;
    height: 500px;
  `};

  ${media.greaterThan("medium")`
    height: 500px;
  `};
`

export const HeaderPhoto = styled.div`
  width: 592px;
  height: 688px;
  margin-top: 50px;

  svg {
    animation: ${fadeImage} 10s ease-in infinite;
  }

  ${media.lessThan("medium")`
    display: none;
  `};

  ${media.between("medium", "large")`
    width: 440px;
    height: 500px;
    margin-top: 0;

    svg {
      transform: scale(0.65);
      margin-top: -80px;
      margin-left: -80px;
    }
  `};
`

export const Description = styled.div`
  display: block;
  width: 85%;
  margin-left: 50px;

  ${media.lessThan("medium")`
    width: 100%;
    margin-left: 0;
    padding: 30px;
  `};

  ${media.between("medium", "large")`
    padding: 0;
    margin-left: 0;
  `};
`

export const DescriptionText = styled.h1`
  width: 90%;
  height: auto;
  font-family: ${fontFamily};
  font-weight: 700;
  font-size: 2.5em;
  letter-spacing: -2px;
  line-height: 1.2em;
  color: #ffffff;
  margin-top: 100px;
  margin-bottom: 20px;

  ${media.lessThan("medium")`
    width: 100%;
    font-size: 1.6rem;
    margin-top: 10px;
  `};

  ${media.between("medium", "large")`
    font-size: 2rem;
    margin-top: 60px;
  `};
`

export const SkillText = styled.div`
  width: 90%;
  height: auto;
  font-family: ${fontFamily};
  font-weight: 300;
  font-size: 1.5em;
  letter-spacing: -1px;
  line-height: 1.5em;
  margin-bottom: 50px;
  color: #638db3;

  ${media.lessThan("medium")`
    width: 100%;
    font-size: 1.1rem;
    margin-bottom: 30px;
  `};
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;

  ${media.lessThan("medium")`
    align-items: flex-start;
  `};

  ${media.between("medium", "large")`
    min-width: 320px;
    margin-left: 40px;
    
    svg {
       width: 35px;
       height: 35px;
       margin-left: 5px;
    }
  
  `};
`

export const Linkedin = styled(LinkedinSquare)`
  width: 45px;
  height: 45px;
  margin-left: 10px;
  color: white;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: #638db3;
  }

  ${media.lessThan("small")`
    width: 35px;
    height: 35px;
    margin-left: 0;
  `};
`

export const Medium = styled(MediumSquare)`
  width: 45px;
  height: 45px;
  margin-left: 10px;
  color: white;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: #638db3;
  }

  ${media.lessThan("small")`
    width: 35px;
    height: 35px;
    margin-left: 1px;
  `};
`

export const Dev = styled(DevTo)`
  width: 45px;
  height: 45px;
  margin-left: 10px;
  color: white;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: #638db3;
  }

  ${media.lessThan("small")`
    width: 35px;
    height: 35px;
    margin-left: 1px;
  `};
`

export const Insta = styled(InstagramAlt)`
  width: 45px;
  height: 45px;
  margin-left: 10px;
  color: white;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: #638db3;
  }

  ${media.lessThan("small")`
    width: 35px;
    height: 35px;
    margin-left: 1px;
  `};
`

export const Face = styled(FacebookSquare)`
  width: 45px;
  height: 45px;
  margin-left: 10px;
  color: white;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: #638db3;
  }

  ${media.lessThan("small")`
    width: 35px;
    height: 35px;
    margin-left: 1px;
  `};
`

export const Git = styled(Github)`
  width: 45px;
  height: 45px;
  margin-left: 10px;
  color: white;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: #638db3;
  }

  ${media.lessThan("small")`
    width: 35px;
    height: 35px;
    margin-left: 1px;
  `};
`

export const Twit = styled(Twitter)`
  width: 45px;
  height: 45px;
  margin-left: 10px;
  color: white;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: #638db3;
  }

  ${media.lessThan("small")`
    width: 35px;
    height: 35px;
    margin-left: 1px;
  `};
`
