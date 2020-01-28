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
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
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
  padding-top: 2px;
`;

export const BurgerWrapper = styled.button`
  @media ${theme.breakpoints.up.lg} {
    display: none;
  }

  transform: translateY(3px);

  svg {
    display: flex;
    path {
      fill: ${theme.palette.black};
    }
  }
`;