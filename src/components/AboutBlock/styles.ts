import styled from "styled-components"
import theme from "../../theme";

export const AboutBlockWrapper = styled.article`
  @media ${theme.breakpoints.down.lg} {
    text-align:center;
  }

  h1 {
    font-weight: 600;
    font-size: ${theme.fontSize[1]};
    line-height: 1.5;
    color:white;
  }

  p {
    margin-top: ${theme.space[2]};
    color:white;
  }

  a {
    @media ${theme.breakpoints.down.lg} {
      justify-content: center;
    }

    color: white;
    opacity: 0.5;
    margin-top: ${theme.space[4]};
    display: block;
    text-decoration: none;
    font-weight: 500;
    display: flex;

    img {
      margin: 0 6px;
      width: 12px;
      transform: translateY(-1px);
    }
  }
`;