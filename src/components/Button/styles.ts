import styled from "styled-components";
import theme from "../../theme";

export const ButtonWrapper = styled.button`
  background: ${theme.palette.blue};
  border-radius: 8px;
  color: ${theme.palette.blue};
  text-transform: uppercase;
  font-weight: 700;
  padding: ${theme.space[3]} ${theme.space[4]} ${theme.space[2]} ${theme.space[4]};
  transition: all 200ms;
  line-height: 1;
  font-size: ${theme.fontSize[-1]};

  &:hover,
  &:focus {
    background: ${theme.palette.blue};
  }
`;