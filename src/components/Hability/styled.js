import styled from "styled-components"
import media from "styled-media-query"

const fontFamily = "Roboto, sans-serif"

export const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap");
  font-family: ${fontFamily};
  width: 99vw;
  height: 650px;
  position: relative;
  margin-bottom: 70px;

  ${media.lessThan("medium")`
    height: auto;
    min-height: 200px;
  `};
`

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap");
  font-family: ${fontFamily};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 85%;
  height: auto;
  min-height: 650px;
  margin: 0 auto;
  padding-top: 20px;

  ${media.lessThan("medium")`
    width: 95%;
    height: auto;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;
  `};

  ${media.greaterThan("large")`
     width: 1260px;
  `}
`

export const Title = styled.h1`
  font-family: ${fontFamily};
  font-size: 2.5em;
  letter-spacing: -2px;
  color: #638db3;
  font-weight: 900;
  text-align: center;
  margin-bottom: 50px;

  ${media.lessThan("medium")`
    font-size: 2em;
    margin-bottom: 30px;
  `};
`

export const ContainerHability = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 80%;
  height: auto;
  min-height: 500px;

  ${media.lessThan("medium")`
    width: 98%;
    justify-content: space-around;
    margin: 0 auto;
  `};

  ${media.between("medium", "large")`
    width: 100%;
    justify-content: space-around;
    margin: 0 auto;
  `};
`

export const ListHability = styled.div`
  flex-basis: auto;
  width: 110px;
  height: 190px;
  margin-left: 49px;
  font-size: 20px;
  letter-spacing: -1px;
  line-height: 30px;
  text-align: center;
  color: #010101;
  font-family: ${fontFamily};
  font-weight: 700;

  ${media.lessThan("medium")`
    width: 80px;
    height: 120px;
    margin: 12px;

    font-size: 95%;

    & img {
      width: 100%;
    }
  `};

  ${media.between("medium", "large")`
    width: 100px;
    height: 135px;
    margin: 12px;
    font-size: 17px;
    
    & img {
     width: 100%;
    }
  `};
`
