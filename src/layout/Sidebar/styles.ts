import styled from "styled-components";
import theme from "../../theme";

export const SidebarWrapper = styled.aside<{ isSidebarOpen: boolean; }>`
  width: 100%;
  display: block;
  background: ${theme.palette.grey[200]};
  min-height: 100vh;
  max-height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 0;
  width: 300px;
  transform: ${({ isSidebarOpen }) => isSidebarOpen ? "translateX(0)" : "translateX(-300px)"};
  transition: all 200ms ease-in-out;
  z-index: 2;

  @media ${theme.breakpoints.up.lg} {
    transform: none;
    border-right: 2px solid ${theme.palette.grey[400]};
  }
`;

export const Logo = styled.img`
  @media ${theme.breakpoints.down.lg} {
    display: none;
  }

  margin: ${theme.space[5]} ${theme.space[4]} ${theme.space[5]} ${theme.space[4]};
`;

export const Filters = styled.div`

`;

export const FilterBlock = styled.div`
  &:not(:last-child) {
    margin-bottom: ${theme.space[5]};
  }

   button {
    &:not(:last-child) {
      margin-bottom: 4px
    }
  }
`;

export const FilterTitle = styled.h4`
  text-transform: uppercase;
  color: ${theme.palette.grey[500]};
  font-weight: 600;
  padding-left: ${theme.space[2]};
  margin-bottom: ${theme.space[1]};
  line-height: 1em;
`;

export const InnerWrapper = styled.div`
  padding: ${theme.space[4]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  flex: 1;
`;

export const AboutBlockWrapper = styled.article`
  @media ${theme.breakpoints.down.lg} {
    display: none;
  }

  margin-top: ${theme.space[5]};
`;

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
  padding: ${theme.space[2]} ${theme.space[4]} ${theme.space[1]} ${theme.space[4]};
  transition: all 200ms;

  &:hover,
  &:focus {
    background: ${theme.palette.blue[900]};
  }
`;