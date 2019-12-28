import styled from "styled-components";
import theme from "../../theme";

export const ShadowItemWrapper = styled.div`
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  background: ${theme.palette.grey[100]};
  border-radius: 8px;
  padding: ${theme.space[4]};
  .shadowitem__button {
    width: 100%;
    margin-top: ${theme.space[3]};
  }
`;

export const Title = styled.h3`
  font-size: ${theme.fontSize[1]};
  font-weight: 500;
  line-height: 1.3;
`;

export const Subtitle = styled.h4`
  color: ${theme.palette.grey[500]};
  margin-bottom: ${theme.space[3]};
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

