import styled from "styled-components";
import theme from "../../theme";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.space[3]};
  @media ${theme.breakpoints.up.lg} {
    padding: 0 ${theme.space[4]};
    height: ${theme.space[7]};
  }
`;

export const ButtonWrapper = styled.div`
  @media ${theme.breakpoints.down.lg} {
    display: none;
  }
`;

export const LogoText = styled.h2`
  font-weight: 700;
  font-size: ${theme.fontSize[2]};
  color: ${theme.palette.black};
`;

export const BurgerWrapper = styled.button`
  @media ${theme.breakpoints.up.lg} {
    display: none;
  }
  svg {
    display: flex;
    path {
      fill: ${theme.palette.primary};
    }
  }
`;