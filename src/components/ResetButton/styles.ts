import styled from "styled-components";
import theme from "../../theme";

export const ResetButtonWrapper = styled.button`
  background: none;
  padding: 0;
  margin: 0;
  line-height: 0;
  outline: none;
  opacity: 0.6;
  transition: all 200ms;

  &:hover,
  &:focus {
    opacity: 1;
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