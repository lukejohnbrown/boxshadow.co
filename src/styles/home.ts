import styled from "styled-components";
import theme from "../theme";

export const AboutBlockWrapper = styled.div`
  @media ${theme.breakpoints.up.lg} {
    display: none;
  }

  background: ${theme.palette.primary};
  padding: ${theme.space[5]} ${theme.space[2]};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const FilterButton = styled.button`
  background: ${theme.palette.grey[200]};
  border: 2px solid ${theme.palette.grey[400]};
  font-weight: 700;
  letter-spacing: 0.2px;
  padding: ${theme.space[2]} ${theme.space[4]} ${theme.space[1]} ${theme.space[4]};
  text-transform: uppercase;
  border-radius: 8px;
  margin: ${theme.space[4]} auto 0 auto;
  transition: all 200ms;

  &:hover {
    background: ${theme.palette.grey[300]};
    border: 2px solid ${theme.palette.grey[500]};
  }
`;

export const HomeWrapper = styled.div`
  min-height: 100vh;

  @media ${theme.breakpoints.up.lg} {
    margin-left: 280px;
  }
`

export const TitleBarWrapper = styled.div`
  @media ${theme.breakpoints.down.lg} {
    display: none;
  }

  padding: ${theme.space[5]} ${theme.space[6]};
`;