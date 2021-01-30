import styled from "styled-components"
import media from "styled-media-query"
import { Linkedin, Medium, Git, Twit, Insta, Face } from "../Header/styled"

const fontFamily = "Roboto, sans-serif"

export const Wrapper = styled.div`
  font-family: ${fontFamily};
  width: 99vw;
  min-height: 300px;
  position: relative;

  ${media.lessThan("medium")`
    height: auto;
  `};

  ${media.greaterThan("medium")`
    width: 100%;
    height: auto;    
  `};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  margin: 0 auto;

  ${media.lessThan("large")`
    width: 100%;
    height: auto;
  `}

  ${media.greaterThan("large")`
     width: 1260px;
  `};
`

export const Title = styled.h1`
  font-family: ${fontFamily};
  font-size: 2.5em;
  letter-spacing: -2px;
  color: #638db3;
  font-weight: 900;
  text-align: center;
  margin-bottom: 30px;

  ${media.lessThan("medium")`
    font-size: 2.1em;
    margin-bottom: 30px;
  `}
`

export const ContainerForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;

  ${media.lessThan("medium")`
    width: 100%;
    height: auto;
    justify-content: space-around;
    margin: 0 auto;
    margin-bottom: 30px;
  `};

  ${media.greaterThan("large")`
    width: 95%;
    justify-content: space-around;
    margin: 0 auto;
    margin-bottom: 30px;
  `};
`

export const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  margin: 0 auto;
  padding: 20px 25px;

  & h1 {
    font-size: 1.8em;
    letter-spacing: -1px;
    line-height: 1.1em;
    color: #333333;
    font-weight: 700;
    margin-bottom: 50px;
    text-align: center;
  }

  & h2 {
    font-size: 2em;
    letter-spacing: -2px;
    line-height: 1.2em;
    margin-bottom: 50px;
    font-weight: 900;
    text-align: center;

    & a {
      color: #606060;
      text-decoration: none;
      display: block;
      transition: color 0.3s linear;

      &:hover {
        color: #000000;
      }
    }
  }

  ${media.lessThan("medium")`
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
  `};
`

export const IconLinkedin = styled(Linkedin)`
  color: #606060;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: #638db3;
  }
`

export const IconMedium = styled(Medium)`
  color: #606060;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: #638db3;
  }
`

export const IconInsta = styled(Insta)`
  color: #606060;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: #638db3;
  }
`

export const IconFace = styled(Face)`
  color: #606060;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: #638db3;
  }
`

export const IconGit = styled(Git)`
  color: #606060;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: #638db3;
  }
`

export const IconTwit = styled(Twit)`
  color: #606060;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: #638db3;
  }
`
