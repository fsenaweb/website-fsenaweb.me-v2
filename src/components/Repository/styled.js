import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

import { Github } from "@styled-icons/boxicons-logos"

const fontFamily = "Roboto, sans-serif"

export const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap");
  font-family: ${fontFamily};
  width: 99vw;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: linear-gradient(to bottom, #4c2b75, #2f2b4a);
  margin-bottom: 30px;

  ${media.between("medium", "large")`
    width: 100%;
    height: 550px;
  `};

  ${media.lessThan("medium")`
    height: auto;
  `};
`

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap");
  font-family: ${fontFamily};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 85%;
  height: 600px;
  margin: 0 auto;

  ${media.between("medium", "large")`
    width: 95%;
    justify-content: center;
    align-items: center;
    padding: 50px;
  `};

  ${media.greaterThan("large")`
     width: 1260px;
  `};

  ${media.lessThan("medium")`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: auto;
    padding: 0 0 50px;
  `};
`

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

  ${media.between("medium", "large")`
    width: 25%;
    height: auto;
    margin: 20px;

    & > h1 {
      font-family: ${fontFamily};
      font-size: 30px;
      letter-spacing: -1px;
      margin: 10px 0;
      color: #fefefe;
      font-weight: 700;
    }
  `};

  ${media.lessThan("medium")`
    width: 100%;
    margin: 10px 0 auto;

    & > h1 {
      font-family: ${fontFamily};
      font-size: 25px;
      letter-spacing: -1px;
      margin: 10px 0;
      color: #fefefe;
      font-weight: 700;
    }
  `};
`

export const IconGit = styled(Github)`
  width: 340px;
  height: 340px;
  color: white;
  transition: color 0.2s linear;

  &:hover {
    cursor: pointer;
    color: yellow;
  }

  ${media.lessThan("medium")`
    width: 140px;
    height: 140px;
  `};

  ${media.between("medium", "large")`
    width: 220px;
    height: 220px;
  `};
`

export const ListRepository = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  ${media.lessThan("medium")`
    display: none;
  `};

  ${media.between("medium", "large")`
    width: 70%;
  `};
`

export const BoxRepository = styled.div`
  font-family: ${fontFamily};
  font-size: 1em;
  color: #fff;
  width: 100%;
  height: 450px;
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
      transition: color 0.3s ease-in;

      &:hover {
        color: yellow;
      }

      &:active {
        color: #fff;
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
    -webkit-box-shadow: inset 0 0 6px rgba(39, 37, 62, 0.3);
    border-radius: 0 100px 100px 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0 100px 100px 0;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  ${media.lessThan("medium")`
    display: none;
  `};

  ${media.between("medium", "large")`
    width: auto;
    height: 430px;
  `};
`

export const ListRepositoryMobile = styled.div`
  display: none;

  ${media.between("medium", "large")`
    width: 65%;
    height: auto;
    justify-content: center;
    align-items: center;
  `};

  ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `};
`

export const BoxRepositoryMobile = styled.div`
  display: none;

  ${media.lessThan("medium")`
   display: block;
   font-family: ${fontFamily};
   font-size: 1em;
   color: #fff;
   height: ${props => (props.expand ? "auto" : "380px")};
   width: 95%;
   border-radius: 10px;
   background-color: rgba(45, 40, 72, 1);
   overflow: hidden;
   padding: 15px;
   background-color: #4f3272;
   margin: 10px 0;

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
     font-size: 16px;
     letter-spacing: 0px;
     line-height: 10px;
     color: #fefefe;
     font-weight: 900;

     & > a {
       color: #fff;
       text-decoration: none;
       transition: color 0.3s ease-in;

       &:hover {
         color: yellow;
       }

       &:active {
         color: #fff;
       }
     }
   }

   & p.repository-desc {
     font-weight: 300;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
     font-size: 12px;
     line-height: 30px;
     color: #fefefe;
   }

   &::-webkit-scrollbar {
     width: 8px;
   }

   &::-webkit-scrollbar-track {
     -webkit-box-shadow: inset 0 0 6px rgba(39, 37, 62, 0.3);
     border-radius: 0 100px 100px 0;
   }

   &::-webkit-scrollbar-thumb {
     border-radius: 0 100px 100px 0;
     -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
   }
 `};
`

const SeeMore = styled.div`
  display: none;

  ${media.lessThan("medium")`
    display: block;
    width: 50%;
    color: #813ec9;
    font-size: 1em;
    text-align: center;
    margin: 0 0 0.5em 0;
    padding: 0.3em 1em;
    border: 2px solid #813ec9;
    border-radius: 5px;
  `};
`

export const SeeMoreText = props => (
  <SeeMore {...props} children={props.children} />
)
