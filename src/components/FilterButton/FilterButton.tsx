import React from 'react';
import { FilterButtonWrapper } from "./styles";

export type FilterButtonProps = {
  id: string;
  isActive?: boolean;
  text?: string | null;
  secondaryText?: string;
  onClick?: (id: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ id, isActive = false, text, secondaryText, onClick }) => (
  <FilterButtonWrapper isActive={isActive} onClick={() => onClick && onClick(id)}>
    {text && (
      <span>{text}</span>
    )}
    {text && (
      <span>{secondaryText}</span>
    )}
  </FilterButtonWrapper>
);

export default FilterButton;