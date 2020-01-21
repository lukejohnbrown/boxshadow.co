import styled from "styled-components";
import theme from "../../theme";

export const OverlayWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${theme.palette.black};
  opacity: 0.7;
`;