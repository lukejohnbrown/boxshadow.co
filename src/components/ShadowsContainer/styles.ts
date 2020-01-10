import styled from "styled-components";
import theme from "../../theme";

const SHADOW_MARGIN = 50;
const SHADOW_ITEM_WIDTH = 270;

export const ShadowsContainerWrapper = styled.div`
  background: white;
  border: 2px solid ${theme.palette.grey[400]};
  min-height: 100vh;

  @media ${theme.breakpoints.up.md} {
    margin-left: ${theme.space[6]};
    border-top-left-radius: 30px;
  }
`;

export const ShadowsContainerTitle = styled.h3`
  font-size: ${theme.fontSize[1]};
  font-weight: 500;
  margin: 0 ${SHADOW_MARGIN}px ${theme.space[3]} 15px;

  @media (min-width: 600px) {
    margin-left: ${SHADOW_MARGIN}px;
  }

  @media ${theme.breakpoints.up.lg} {
   font-size: ${theme.fontSize[2]};
  }
`;

export const ScrollWrapper = styled.div`
  overflow: scroll;
  padding: ${theme.space[4]} 0;
  &::-webkit-scrollbar {
    display:none;
  }

  @media ${theme.breakpoints.up.md} {
    padding: ${theme.space[5]} 0;
  }
`;

export const ShadowItemsWrapper = styled.div<{
  shadowCount: number
}>`
  display: flex;
  flex-wrap: no-wrap;
  margin-bottom: ${theme.space[6]};
  width: ${({ shadowCount }) => SHADOW_MARGIN + (shadowCount * (SHADOW_ITEM_WIDTH + SHADOW_MARGIN))}px;
`

export const ShadowItemWrapper = styled.div`
  flex: 0 0 ${SHADOW_ITEM_WIDTH}px;
  margin: 0 ${SHADOW_MARGIN}px 0 0;
   &:first-child {
    margin: 0 ${SHADOW_MARGIN}px 0 15px;

    @media (min-width: 600px) {
      margin-left: ${SHADOW_MARGIN}px;
    }
  }
`

