import React from 'react'
import { TitleBarWrapper } from "./styles";
import arrowIcon from "../../images/arrow-icon.svg";

const TitleBar = () => {
  return (
    <TitleBarWrapper>
      <img src={arrowIcon} alt="" />
      <strong>Looking for a particular shadow style?</strong>
      Use the filters in the sidebar to explore shadows <span>😎</span>
    </TitleBarWrapper>
  )
}

export default TitleBar
