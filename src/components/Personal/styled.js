import styled from "styled-components"
import media from "styled-media-query"
import BGPersonal from "./../../images/personal-bg.png"

const fontFamily = "Roboto, sans-serif"

export const Wrapper = styled.div`
  font-family: ${fontFamily};
  width: 100%;
  height: 858px;
  position: relative;
  background-image: url(${BGPersonal});
  background-position: center;
  background-repeat: repeat-x;
  margin-bottom: 50px;

  ${media.lessThan("medium")`
    background-image: linear-gradient(to bottom, #4c2b75, #2f2b4a);
    background-position: -50% 350%;
    height: auto;
    margin-bottom: 30px;
  `};

  ${media.greaterThan("medium")`
    width: 100%;
  `};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 85%;
  height: 100%;
  margin: 0 auto;

  ${media.lessThan("medium")`
    width: 100%;
    height: auto;
  `};

  ${media.between("medium", "large")`
    width: 90%;
  `};

  ${media.greaterThan("large")`
    width: 1260px;
  `};
`

export const BoxDescription = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 470px;
  position: relative;

  ${media.lessThan("medium")`
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  `};

  ${media.greaterThan("medium")`
    margin-top: 50px;
  `};
`

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

  ${media.lessThan("medium")`
    width: 100%;
    padding: 20px;

    & p {
      font-size: 1em;
      color: #ffffff;
      line-height: 1.1em;
      font-weight: 300;
    }
  `};

  ${media.between("medium", "large")`
     width: 55%;
     height: 95%;
     padding: 60px 10px;

    & p {
      font-size: 1.2em;
      color: #ffffff;
      line-height: 1em;
      font-weight: 300;
    }
  `};
`

export const ImageDescription = styled.div`
  width: 40%;
  height: 100%;
  padding-top: 20px;
  background-image: url(${props => props.url});
  background-size: contain;
  background-repeat: no-repeat;

  & img {
    max-width: 450px;
  }

  ${media.lessThan("medium")`
    width: 100%;
    background-position: center;
    margin-top: 30px;
      & img {
        max-width: 100%;
      }
  `};

  ${media.between("medium", "large")`
    width: 45%;
    padding-top: 70px;
    & img {
      max-width: 100%;
      
    }
  `};
`

export const BoxExperience = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  ${media.lessThan("medium")`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `};

  ${media.greaterThan("medium")`
    padding: 0;
  `};
`

export const Title = styled.h1`
  font-family: ${fontFamily};
  font-size: 1.9em;
  letter-spacing: -1px;
  color: #ffffff;
  font-weight: 900;
  text-align: left;
  margin-bottom: 20px;

  ${media.lessThan("medium")`
    font-size: 1.5em;
    margin-bottom: 0;
  `};

  ${media.between("medium", "large")`
    font-size: 1.4em;
  `};
`

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

  ${media.lessThan("medium")`
    border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
    width: 90%;

    &:last-child {
      border: none;
    }
  `};

  ${media.between("medium", "large")`
    height: 150px;
  `};
`

export const Ano = styled.div`
  position: absolute;
  z-index: 1;
  font-size: 9.3em;
  letter-spacing: -7px;
  color: #0a0a0a;
  opacity: 0.15;
  font-weight: 900;

  ${media.lessThan("medium")`
    font-size: 8.5em;
  `};

  ${media.between("medium", "large")`
    font-size: 6.4em;
  `};
`

export const Cargo = styled.p`
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  font-size: 1.4em;
  letter-spacing: -0.5px;
  line-height: 30px;
  color: #ffffff;
  font-weight: 900;

  ${media.between("medium", "large")`
    line-height: 20px;
    font-size: 1.1em;
  `};
`

export const Empresa = styled.p`
  position: relative;
  z-index: 1;
  font-size: 1.2em;
  letter-spacing: -0.5px;
  color: #ffffff;
  font-weight: 500;

  ${media.between("medium", "large")`
    line-height: 20px;
    font-size: 1em;
  `};
`

export const Local = styled.p`
  position: relative;
  z-index: 1;
  font-size: 1.2em;
  letter-spacing: -0.5px;
  line-height: 30px;
  color: #ffffff;
  font-weight: 900;

  ${media.between("medium", "large")`
    line-height: 20px;
  `};
`
