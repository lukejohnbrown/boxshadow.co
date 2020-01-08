import styled from "styled-components";
import theme from "../../theme";

export const ResetButtonWrapper = styled.button`
  background: none;
  padding: 0;
  margin: 0;
  line-height: 0;
  outline: none;

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${theme.palette.grey["500"]};
      }
    }
  }

  span {
    font-size: 0;
  }

  svg {
    path {
      transition: all 100ms;
    }
  }
`;