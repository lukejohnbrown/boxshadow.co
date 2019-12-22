import styled from "styled-components";
import theme from "../../theme";
import { FilterButtonProps } from "./FilterButton";

export const FilterButtonWrapper = styled.button<Partial<FilterButtonProps>>`
  display: block;
  background: ${({ isActive }) => isActive ? theme.palette.grey[300] : "none"};
  color: ${theme.palette.blue[800]};
  line-height: 1em;
  border-radius: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${theme.space[2]};
  transition: all 200ms;
  outline: none;

  &:hover {
    border-bottom-color: ${theme.palette.grey[400]};
  }

  span {
    margin-top: 3px;
    line-height: 1em;
    transition: all 200ms;
    &:last-child {
      font-weight: 600;
    }
  }
`;

