import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"
import { Menu } from "@styled-icons/boxicons-regular"
import { Close } from "@styled-icons/evaicons-solid"

const { device } = require("../../styles/global")

const fontFamily = "Roboto, sans-serif"

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
`

const rotateClose = keyframes`
  from {
    transform: rotate(90deg);
    opacity: 0;
  }

  to {
    transform: rotate(0deg);
    opacity: 1;
  }
`

export const MobileMenu = styled(Menu)`
  width: 42px;
  height: 42px;
  color: ${props => (props.position > 350 ? "black" : "white")};
  background-color: ${props =>
    props.position > 350 ? "rgba(169,169,169, 0.6)" : "none"};
  position: fixed;
  z-index: 100;
  top: 30px;
  right: 50px;
  transition: color 0.1s linear;
  display: ${props => (props.active ? "none" : "block")};
  animation: ${props => (props.active ? rotateOpen : rotateClose)} 0.1s linear;
  animation-direction: normal;

  &:active,
  &:hover {
    cursor: pointer;
    color: #638db3;
  }

  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    top: 25px;
    right: 30px;
  }

  @media (min-width: ${device.laptopM}) {
    display: none;
  }
`

export const CloseMenu = styled(Close)`
  width: 42px;
  height: 42px;
  color: ${props => (props.position > 350 ? "black" : "white")};
  background-color: ${props =>
    props.position > 350 ? "rgba(169,169,169, 0.6)" : "none"};
  position: fixed;
  z-index: 100;
  top: 30px;
  right: 50px;
  display: ${props => (props.active ? "block" : "none")};
  transition: color 0.1s linear;
  animation: ${props => (props.active ? rotateOpen : rotateClose)} 0.1s linear;
  animation-direction: reverse;

  &:active,
  &:hover {
    cursor: pointer;
    color: #638db3;
  }

  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    top: 25px;
    right: 30px;
  }

  @media (min-width: ${device.laptopM}) {
    display: none;
  }
`

export const MenuIn = styled.div`
  position: fixed;
  z-index: 100;
  width: 80vw;
  min-height: 100%;
  padding: 30px;
  top: 0;
  left: 0;
  background-color: #f5f6fa;
  -webkit-font-smoothing: antialiased;
  transform: translateX(${props => (props.isOpen ? "0" : "-80vw")});
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    width: 40vw;
    padding: 80px;
  }
`

export const Logo = styled.h1`
  display: none;

  & a {
    color: #293a45;
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

  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-grow: 1;
    width: 100%;
    min-height: 30px;
    font-family: ${fontFamily};
    font-size: 1.8em;
    font-weight: 900;
    letter-spacing: -1.5px;
    color: #000;
  }

  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-grow: 1;
    width: 100%;
    height: 100px;
    font-family: ${fontFamily};
    font-size: 2em;
    font-weight: 900;
    letter-spacing: -1.5px;
    color: #000;
  }
`

export const MenuList = styled(Link)`
  display: block;
  font-family: ${fontFamily};
  font-size: 1.6em;
  font-weight: 700;
  line-height: 1.7em;
  letter-spacing: -1px;
  color: #293a45;
  margin-left: 10px;
  text-decoration: none;

  @media (min-width: ${device.tablet}) and (max-width: ${device.laptopS}) {
    font-size: 1.8em;
    font-weight: 900;
    line-height: 1.7em;
    margin-left: 20px;
  }
`

export const LangButton = styled.div`
  margin: 15px 10px;

  & button {
    margin-right: 10px;
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`
