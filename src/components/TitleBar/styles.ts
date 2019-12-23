import styled from "styled-components";
import theme from "../../theme";

export const TitleBarWrapper = styled.h2`
  display: flex;
  align-items: center;
  font-size: ${theme.fontSize[1]};

  @media ${theme.breakpoints.up.xl} {
    font-size: ${theme.fontSize[2]};
  }

  strong {
    margin: 0 ${theme.space[2]};
    font-weight: 500;
  }

  img { /* arrow icon */
    transform: translateY(-1.5px);
    width: 15px;

    @media ${theme.breakpoints.up.xl} {
      width: 18px;
      transform: translateY(-1.5px);
    }
  }

  span { /* emoji */
    transform: translateY(1px);
    margin-left: ${theme.space[1]};

    @media ${theme.breakpoints.up.xl} {
      transform: translateY(3px);
    }
  }
`;