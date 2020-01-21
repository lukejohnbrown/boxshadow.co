import styled from "styled-components";
import theme from "../../theme";

export const SidebarWrapper = styled.aside<{ isSidebarOpen: boolean; }>`
  width: 100%;
  display: block;
  background: ${theme.palette.green};
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
  border-top: 2px solid black;
  border-right: 3px solid black;
  border-top-right-radius: 6px;

  @media ${theme.breakpoints.up.lg} {
    transform: none;
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
    margin-bottom: ${theme.space[6]};
  }

   button {
    &:not(:last-child) {
      margin-bottom: 4px
    }
  }
`;

export const FilterTitle = styled.h4`
  color: white;
  margin-bottom: ${theme.space[3]};
  line-height: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${theme.fontSize[1]};

  button {
    transform: translateY(-1px);
  }
`;

export const InnerWrapper = styled.div`
  padding: ${theme.space[5]} ${theme.space[4]} ${theme.space[3]} ${theme.space[4]};
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

  margin-top: ${theme.space[6]};
`;
