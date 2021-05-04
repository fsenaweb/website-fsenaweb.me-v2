import styled from "styled-components"
import media from "styled-media-query"
import { device } from "../../styles/global"

const fontFamily = "Roboto, sans-serif"

export const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap");
  font-family: ${fontFamily};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 550px;
  position: relative;
  margin-bottom: 30px;

  ${media.lessThan("medium")`
    font-size: 100%;
    height: auto;
  `};

  ${media.between("medium", "large")`
    height: auto;
    height: auto;
    min-height: 410px;
  `};
`

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap");
  font-family: ${fontFamily};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: auto;
  min-height: 400px;
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

  ${media.lessThan("medium")`
    width: 100%;
    height: auto;
  `};

  ${media.between("medium", "large")`
    height: auto;
    min-height: 300px;
  `};

  ${media.greaterThan("huge")`
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
  margin-bottom: 20px;

  ${media.lessThan("medium")`
    font-size: 2em;
    margin-bottom: 30px;
  `};
`

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

  ${media.lessThan("medium")`
    width: 100%;
    margin-bottom: 20px;
  `};
`

export const CarouselCards = styled.div`
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
  width: 100%;

  ${media.lessThan("medium")`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `};
`

export const Card = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap");
  width: 263px;
  min-width: 30%;
  height: 293px;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  z-index: 3;
  border: 1px solid #ccc;
  margin: 0 45px 2px 10px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  & img:hover {
    opacity: 0.5;
  }

  & a {
    text-decoration: none;
  }

  ${media.between("medium", "large")`
    height: auto;
    min-height: 170px;
    margin: 0 15px 2px 10px;
  `};

  ${media.lessThan("medium")`
    width: 90%;
    height: auto;
    min-height: 300px
    margin: 0;
    margin-top: 20px;
  `};
`

export const Image = styled.div`
  width: 100%;
  height: 160px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 10px;

  ${media.lessThan("medium")`
    height: 130px;
    background-size: contain;
    background-position: top center;
    
  `};

  ${media.between("medium", "large")`
    height: 130px;
    background-size: contain;
    background-position: top center;
  `};
`

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

  ${media.lessThan("medium")`
    padding: 10px 10px;
    font-size: 1.1em;
  `};

  ${media.between("medium", "large")`
    padding: 10px 10px;
    font-size: 1.2em;
  `};
`

export const SeeMore = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap");
  font-family: ${fontFamily};
  display: inline-block;
  width: 100%;
  font-size: 1.3em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 20px;
  text-decoration: none;

  & a {
    text-decoration: none;
    color: #000;
    font-weight: 900;
    transition: color 0.9s ease;
  }

  & a:hover {
    color: #828282;
  }

  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    width: 75%;
    font-size: 1.1em;
  }
`
