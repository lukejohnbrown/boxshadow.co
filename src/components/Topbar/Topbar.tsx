import React from 'react';
import logo from "../../images/logo.svg";
import { TopBarWrapper } from "./styles";

const TopBar = () => {
  return (
    <TopBarWrapper>
      <img src={logo} alt="Boxshadows.co" />
    </TopBarWrapper>
  )
}

export default TopBar;
