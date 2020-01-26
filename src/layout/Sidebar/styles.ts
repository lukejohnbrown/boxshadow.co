import styled from "styled-components";
import theme from "../../theme";

export const SidebarWrapper = styled.aside<{ isSidebarOpen: boolean; }>`
  width: 100%;
  display: block;
  background: ${theme.palette.primary};
  min-height: calc(100vh - ${theme.space[3]});
  max-height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: ${theme.space[3]};
  width: 300px;
  transform: ${({ isSidebarOpen }) => isSidebarOpen ? "translateX(0)" : "translateX(-300px)"};
  transition: all 200ms ease-in-out;
  z-index: 4;
  /* border-top: 2px solid black;
  border-right: 2px solid black; */
  border-top-right-radius: 6px;

  &::-webkit-scrollbar {
    display:none;
  }

  @media ${theme.breakpoints.up.lg} {
    transform: none;
    top: ${theme.space[7]};
    min-height: calc(100vh - ${theme.space[7]});
  }
`;

export const Logo = styled.img`
  @media ${theme.breakpoints.down.lg} {
    display: none;
  }

  margin: ${theme.space[5]} ${theme.space[4]} ${theme.space[5]} ${theme.space[4]};
`;


export const FilterBlock = styled.div`
  margin-bottom: ${theme.space[7]};

   button {
    &:not(:last-child) {
      margin-bottom: ${theme.space[2]};
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

export const Filters = styled.div``;

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
