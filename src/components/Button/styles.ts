import styled from "styled-components";
import theme from "../../theme";

export const ButtonWrapper = styled.button`
  background: ${theme.palette.primary};
  border-radius: 6px;
  color: white;
  padding: ${theme.space[2]} ${theme.space[4]}  calc(${theme.space[2]} - 1px)  ${theme.space[4]};
  transition: all 200ms;
  line-height: 1;
  font-size: ${theme.fontSize[0]};
  border: 3px solid black;

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;