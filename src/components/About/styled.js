import styled from "styled-components"
import media from "styled-media-query"

const fontFamily = "Roboto, sans-serif"

export const Wrapper = styled.div`
  font-family: ${fontFamily};
  width: 99vw;
  min-height: 800px;
  background-position: bottom;
  background-size: 70%;
  background-repeat: repeat-x;
  margin-bottom: 40px;

  ${media.lessThan("medium")`
    height: auto;
  `};

  ${media.greaterThan("medium")`
    width: 100%;
    min-height: auto;
    display: block;
  `};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  
  ${media.lessThan("medium")`
     width: 100%;
    height: auto;
  `}
  
  ${media.between("medium", "large")`
     width: 100%;
    height: auto;
  `} 
  
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
  margin-bottom: 40px;
  
  ${media.lessThan("medium")`
    font-size: 2.1em;
    margin-bottom: 30px;
  `}
  }
`

export const ContainerAbout = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 500px;

  ${media.lessThan("medium")`
    width: 100%;
    min-height: 1900px;
    height: auto;
    max-height: 2300px;
    flex-direction: row;
    margin: 0 auto;
    margin-bottom: 30px;
  `}

  ${media.greaterThan("medium")`
    width: 95%;
    height: auto;
    justify-content: flex-start;
    margin: 0 auto;
    margin-bottom: 30px;
  `}
`

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 35%;
  height: auto;
  padding: 10px 20px;

  & img {
    width: 100%;
  }

  & h1,
  h2 {
    font-size: 1.3em;
    letter-spacing: -1px;
    line-height: 1.1em;
    color: #333333;
    font-weight: 700;
    margin-top: 50px;
  }

  & p {
    font-size: 1.1em;
    letter-spacing: -0.5px;
    line-height: 1.2em;
    color: #333333;
    font-weight: 300;
  }

  & ul > li {
    font-size: 1.1em;
    letter-spacing: -0.5px;
    line-height: 1.5em;
    color: #333333;
    font-weight: 300;
  }

  ${media.lessThan("medium")`
    width: 100%;
    min-height: 670px;
    height: 700px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px 30px;

    & h1,
    h2 {
      font-size: 1em;
      letter-spacing: -1px;
      line-height: 1em;
      text-align: left;
      margin-bottom: 20px;
    }

    & p {
      font-size: 1em;
    }
  `}
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 65%;
  min-height: 500px;
  padding: 0 25px;

  & p {
    font-size: 1.2em;
    font-weight: 300;
    line-height: 1.3em;
    margin: 8px 0;
  }

  ${media.lessThan("medium")`
    width: 100%;
    height: auto;
    min-height: 600px;
    padding: 10px 25px;

    & p {
      font-size: 1em;
      line-height: 1.2em;
      margin: 8px 0;
    }
  `}

  ${media.between("large", "huge")`
    width: 60%;
    height: auto;
    min-height: 500px;
    justify-content: center;
    align-items: center;

    & p {
      font-size: 1em;
      line-height: 1.2em;
      margin: 8px 0;
    }
  `}
`

export const ContainerHability = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  min-height: 200px;
  margin: 30px 0;

  ${media.lessThan("medium")`
    width: 98%;
    height: auto;
    min-height: 500px;
    justify-content: space-around;
    margin-top: 30px;
  `}

  ${media.between("medium", "large")`
    width: 100%;
    height: auto;
    min-height: 400px;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 15px;
  `}
`

export const ListHability = styled.div`
  flex-basis: auto;
  width: 90px;
  height: 140px;
  margin-right: 5px;
  font-size: 0.95em;
  letter-spacing: -1px;
  line-height: 20px;
  text-align: center;
  color: #010101;
  font-family: ${fontFamily};
  font-weight: 700;

  & img {
    width: 90%;
  }

  ${media.lessThan("medium")`
    width: 80px;
    height: 110px;
    margin: 12px;

    font-size: 95%;

    & img {
      width: 100%;
    }
  `}
`
