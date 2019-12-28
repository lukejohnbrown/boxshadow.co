import styled from "styled-components";
import theme from "../../theme";

export const ShadowsContainerWrapper = styled.div`
  background: white;
  padding: ${theme.space[4]} ${theme.space[3]};
  border: 1px solid ${theme.palette.grey[400]};

  @media ${theme.breakpoints.up.sm} {
    padding: ${theme.space[4]};
  }

  @media ${theme.breakpoints.up.md} {
    padding: ${theme.space[5]} ${theme.space[5]};
    margin-left: ${theme.space[6]};
    border-top-left-radius: 30px;
  }

  @media ${theme.breakpoints.up.lg} {
    padding-left: ${theme.space[6]};
  }
`;

export const ShadowsContainerTitle = styled.h3`
  margin-bottom: ${theme.space[3]};
  font-size: ${theme.fontSize[1]};
  font-weight: 500;

  @media ${theme.breakpoints.up.lg} {
   font-size: ${theme.fontSize[2]};
  }
`;

export const ShadowItemWrapper = styled.div`
  flex: 0 0 100%;
  margin: 0 0 ${theme.space[6]} 0;

  @media(min-width: 600px) {
    flex: 0 0 calc(50% - ${theme.space[6]});
    margin: 0 ${theme.space[6]} ${theme.space[6]} 0;
  }

  @media ${theme.breakpoints.up.sm} {
    flex: 0 0 calc(33.3333% - ${theme.space[6]});
  }

  @media ${theme.breakpoints.up.xl} {
    flex: 0 0 calc(25% - ${theme.space[6]});
  }

  @media ${theme.breakpoints.up.xxl} {
    flex: 0 0 calc(20% - ${theme.space[6]});
  }

  @media(min-width: 2000px) {
    flex: 0 0 calc(15% - ${theme.space[6]});
  }
`

export const ShadowItemsWrapper = styled.div`
   display: flex;
  flex-wrap: wrap;
  @media(min-width: 600px) {
    margin-right: -${theme.space[6]};
  }
`