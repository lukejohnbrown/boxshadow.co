import styled from "styled-components";
import hexToRgba from "hex-to-rgba";
import theme from "../../theme";
import { ShadowsJson } from "../../types/graphql"

type ShadowStyles = {
  color: string,
  alpha: string,
  blur: string,
  spread: string,
  xValue: string,
  yValue: string,
}

// TODO move this to utils
const constructBoxShadowStyle = ({
  color,
  alpha,
  blur,
  spread,
  xValue,
  yValue,
}: ShadowStyles) => {
  const rgbaColor = hexToRgba(color, alpha);
  return `${xValue} ${yValue} ${blur} ${spread} ${rgbaColor}`;
}

export const ShadowItemWrapper = styled.div<{
  shadowStyles: ShadowStyles
}>`
  box-shadow: ${({ shadowStyles }) => constructBoxShadowStyle(shadowStyles)};
  background: ${theme.palette.grey[100]};
  border-radius: 8px;
  padding: ${theme.space[4]};
  .shadowitem__button {
    width: 100%;
    margin-top: ${theme.space[3]};
  }
`

export const Title = styled.h3`
  font-size: ${theme.fontSize[1]};
  font-weight: 500;
  line-height: 1.3;
`;

export const Subtitle = styled.h4`
  color: ${theme.palette.grey[500]};
  margin-bottom: ${theme.space[3]};
  height: 25px;
`;

export const StatsWrapper = styled.ul`

`;

export const ShadowStatsWrapper = styled.ul`
  list-style: none;
  li {
    &:not(:last-child) {
      margin-bottom: ${theme.space[1]};
    }
  }
`;

export const ShadowStatWrapper = styled.li`
  font-weight: 500;
  color: ${theme.palette.blue[800]};
  display: flex;
  line-height: 1;

  span {
    color: ${theme.palette.grey[500]};
    margin-right: ${theme.space[4]};
    width: 60px;
  }
`;

