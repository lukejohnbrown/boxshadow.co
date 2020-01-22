import React from 'react';
import { FilterButtonWrapper } from "./styles";

export type FilterButtonProps = {
  id: string;
  isActive?: boolean;
  text?: string | null;
  secondaryText?: string;
  icon?: {
    publicURL: string
  };
  onClick?: (value: any) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  id,
  isActive = false,
  text,
  secondaryText,
  icon,
  onClick,
}) => (
  <FilterButtonWrapper
    isActive={isActive}
    onClick={() => onClick && onClick(id)}
  >
    {text && (
      <span>
        {icon && <img src={icon.publicURL} alt={`${text} icon`} />}
        {text}
      </span>
    )}
    {text && <span>{secondaryText}</span>}
  </FilterButtonWrapper>
)

export default FilterButton;