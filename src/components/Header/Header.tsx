import React from 'react'
import { Button } from "..";
import Burger from "./Burger";
import { HeaderWrapper, LogoText, ButtonWrapper } from "./styles"

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoText>boxshadow.co</LogoText>
      <ButtonWrapper>
        <Button onClick={() => {}}>Suggest shadow</Button>
      </ButtonWrapper>
      <Burger />
    </HeaderWrapper>
  )
}

export default Header
