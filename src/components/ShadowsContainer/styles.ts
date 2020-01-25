import styled from "styled-components";
import theme from "../../theme";

const SHADOW_MARGIN = 60;
const SHADOW_ITEM_WIDTH = 250;

export const ShadowsContainerWrapper = styled.div`
  background: white;
  min-height: 100vh;

  @media ${theme.breakpoints.up.lg} {
    margin-top: 30px;
  }
`;

export const ShadowsContainerTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-left: 15px;
  transform: translateY(${theme.space[4]});

  @media (min-width: 600px) {
    margin-left: ${SHADOW_MARGIN}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: ${theme.space[5]};
  }
`;

export const ShadowsContainerHint = styled.span`
  display: flex;
  align-items: center;
  margin-top: ${theme.space[1]};
  line-height: 1.2;
  font-weight: 400;

  @media (min-width: 600px) {
    margin-top: -5px;
  }

  @media ${theme.breakpoints.up.lg} {
    margin-top: 5px;
  }

  img {
    margin-right: ${theme.space[1]};
    width: 25px;
  }
`;

export const ScrollWrapper = styled.div`
  overflow: scroll;
  padding: ${theme.space[3]} 0;

  &::-webkit-scrollbar {
    display:none;
  }

  @media ${theme.breakpoints.up.md} {
    padding: ${theme.space[4]} 0;
  }
`;

export const ShadowItemsWrapper = styled.div<{
  shadowCount: number
}>`
  display: flex;
  flex-wrap: no-wrap;
  width: ${({ shadowCount }) => SHADOW_MARGIN + (shadowCount * (SHADOW_ITEM_WIDTH + SHADOW_MARGIN))}px;
`

export const ShadowItemWrapper = styled.div`
  flex: 0 0 ${SHADOW_ITEM_WIDTH}px;
  margin: ${theme.space[6]} ${SHADOW_MARGIN}px ${theme.space[7]} 0;
   &:first-child {
    margin: ${theme.space[6]} ${SHADOW_MARGIN}px ${theme.space[7]} 15px;

    @media (min-width: 600px) {
      margin-left: ${SHADOW_MARGIN}px;
    }
  }
`


