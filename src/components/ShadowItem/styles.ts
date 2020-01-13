import styled from "styled-components";
import hexToRgba from "hex-to-rgba";
import theme from "../../theme";

export const ShadowItemWrapper = styled.div<{
  boxShadowStyle: string | undefined
}>`
  box-shadow: ${({ boxShadowStyle }) => boxShadowStyle};
  background: ${theme.palette.grey[100]};
  border-radius: 8px;

  .shadowitem__button {
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .shadowitem__dotgroup {
    display: flex;
    margin-top: ${theme.space[3]};
    button {
      border-radius: 50%;
      width: 9px;
      height: 9px;
      background: ${theme.palette.grey[400]};
      padding: 0;
      margin-right: ${theme.space[2]};

      &.carousel__dot--selected {
        background: ${theme.palette.grey[600]};
      }
    }
  }
`

export const Title = styled.h3`
  font-size: ${theme.fontSize[1]};
  font-weight: 500;
  line-height: 1.3;
  padding: ${theme.space[4]} ${theme.space[4]} 0 ${theme.space[4]}
`;

export const Subtitle = styled.h4`
  color: ${theme.palette.grey[500]};
  margin-bottom: ${theme.space[3]};
  height: 25px;
  padding: 0 ${theme.space[4]};
`;

export const StatsCarouselWrapper = styled.div`
  background: ${theme.palette.grey[200]};
  padding: ${theme.space[3]} ${theme.space[4]};
`;

export const ShadowStatsWrapper = styled.ul`
  list-style: none;
  li {
    &:not(:last-child) {
      margin-bottom: ${theme.space[2]};
    }
  }
`;

export const ShadowStatWrapper = styled.li`
  font-weight: 600;
  color: ${theme.palette.grey[600]};
  display: flex;
  line-height: 1;

  span {
    font-weight: 300;
    color: ${theme.palette.blue[800]};
    margin-right: ${theme.space[4]};
    width: 60px;
  }
`;

export const ShadowLayerTitle = styled.p`
  margin-bottom: ${theme.space[1]};
  font-weight: 500;
  color: ${theme.palette.grey[500]};
`;
