import styled from "styled-components";
import theme from "../../theme";

export const TopbarWrapper = styled.header`
  background: ${theme.palette.grey[200]};
  display: flex;
  justify-content: center;
  border-bottom: 2px solid ${theme.palette.grey[400]};
  padding: ${theme.space[2]} 0;

  @media ${theme.breakpoints.up.md} {
    display: none;
  }

  img {
    width: 180px;
  }
`