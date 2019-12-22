import React from 'react'
import logo from "../../images/logo.svg";
import { TopbarWrapper } from "./styles";

const Topbar = () => {
  return (
    <TopbarWrapper>
      <img src={logo} alt="Boxshadows.co" />
    </TopbarWrapper>
  )
}

export default Topbar;
