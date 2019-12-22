import styled from "styled-components"
import theme from "../../theme";

export const AboutBlockWrapper = styled.article`
  h1 {
    font-weight: 600;
    font-size: ${theme.fontSize[1]};
    line-height: 1.5;
  }

  p {
    margin-top: ${theme.space[1]};
  }

  a {
    margin-top: ${theme.space[3]};
    display: block;
    text-decoration: none;
    font-weight: 500;
    display: flex;

    img {
      margin: 0 5px;
    }
  }
`

export const SidebarButtonWrapper = styled.button`
  display: block;
  width: 100%;
  background: ${theme.palette.blue[800]};
  color: ${theme.palette.blue[100]};
  text-align: left;
  text-transform: uppercase;
  font-weight: 700;
  font-size: ${theme.fontSize[-1]};
  letter-spacing: 0.2px;
  padding: ${theme.space[2]} ${theme.space[4]} ${theme.space[1]}
    ${theme.space[4]};
  transition: all 200ms;

  &:hover,
  &:focus {
    background: ${theme.palette.blue[900]};
  }
`
