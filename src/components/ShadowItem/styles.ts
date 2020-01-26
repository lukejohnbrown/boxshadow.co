import styled from "styled-components";
import hexToRgba from "hex-to-rgba";
import theme from "../../theme";

export const ShadowItemWrapper = styled.div<{
  boxShadowStyle: string | undefined
}>`
  box-shadow: ${({ boxShadowStyle }) => boxShadowStyle};
  border-radius: 4px;
  position: relative;

  .shadowitem__dotgroup {
    display: flex;

    button {
      border-radius: 50%;
      width: 9px;
      height: 9px;
      background: ${theme.palette.primary};
      opacity: 0.4;
      padding: 0;
      margin-right: ${theme.space[2]};

      &.carousel__dot--selected {
        opacity: 0.8;
      }
    }
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.space[3]} ${theme.space[3]} calc(${theme.space[3]} - 3px) ${theme.space[3]};
  background: #F1F1F1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`
export const CategoryLogo = styled.img`
  min-width: 15px;
  transform: translateY(-1px);
`;

export const Title = styled.h3`
  font-size: ${theme.fontSize[0.5]};
  font-weight: 500;
  line-height: 1;
`;

export const StatsCarouselWrapper = styled.div`
  padding: ${theme.space[4]} ${theme.space[3]};
  position: relative;
`;

export const ShadowStatsWrapper = styled.ul`
  list-style: none;
  li {
    &:not(:last-child) {
      margin-bottom: ${theme.space[3]};
    }
  }
`;

export const ShadowStatWrapper = styled.li`
  font-weight: 600;
  font-size: ${theme.fontSize[0]};
  color: ${theme.palette.black};
  display: flex;
  line-height: 1;

  span {
    font-weight: 300;
    color: ${theme.palette.black};
    margin-right: ${theme.space[4]};
    width: 60px;
  }
`;

export const ShadowLayerTitle = styled.p`
  margin-bottom: ${theme.space[1]};
  font-weight: 500;
  color: ${theme.palette.grey[500]};
`;

export const CopyButton = styled.button<{
  copied: boolean
}>`
  color: ${theme.palette.primary};
  font-weight: 700;
  text-decoration: ${({ copied }) => copied ? "none" : "underline"};
  position: absolute;
  bottom: calc(${theme.space[4]} - 5px);
  right: ${theme.space[3]};
  padding: 0;
  margin: 0;
  line-height: 1;
`;