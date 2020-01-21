import styled from "styled-components";
import theme from "../../theme";
import { FilterButtonProps } from "./FilterButton";

export const FilterButtonWrapper = styled.button<Partial<FilterButtonProps>>`
  display: block;
  background: white;
  opacity: ${({ isActive }) => isActive ? "1" : "0.6"};
  color: ${theme.palette.black};
  font-weight: 500;
  line-height: 1em;
  border-radius: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${theme.space[2]} ${theme.space[2]};
  transition: all 200ms;
  outline: none;
  border: 3px solid black;

  span {
    margin-top: 3px;
    line-height: 1em;
    transition: all 200ms;
    &:last-child {
      font-weight: 600;
    }
  }
`;

