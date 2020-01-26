import styled from "styled-components";
import theme from "../../theme";

export const ErrorAlertWrapper = styled.div<{
  showError: boolean;
}>`
  transform: ${({ showError }) => showError ? "translateX(0)" : "translateX(1000px)"};
  background: ${theme.palette.error};
  position: fixed;
  z-index: 5;
  bottom: ${theme.space[4]};
  right: ${theme.space[4]};
  border-radius: 6px;
  color: white;
  padding: ${theme.space[4]} ${theme.space[4]}  calc(${theme.space[4]} - 3px)  ${theme.space[4]};
  transition: all 200ms;
  line-height: 1.3;
  font-size: ${theme.fontSize[0]};
  transition: all 200ms;
`;