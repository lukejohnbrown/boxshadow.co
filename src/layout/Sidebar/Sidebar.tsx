import React from "react";
import { FilterButton } from "../../components";
import logo from "../../images/logo.svg";
import SidebarButton from "./SidebarButton";
import { useSidebar } from "./SidebarProvider";
import { AboutBlock } from "../../components";
import {
  FilterBlock,
  Filters,
  FilterTitle,
  InnerWrapper,
  Logo,
  SidebarWrapper,
  AboutBlockWrapper,
} from "./styles"

export type SidebarProps = {
  filters?: {
    title: string;
    items: {
      id: string;
      title: string;
      count: number;
    }[];
  }[];
  selectedFilters?: string[];
  onFilterClick?: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ filters, selectedFilters, onFilterClick }) => {
  const { isSidebarOpen } = useSidebar();
  return (
    <SidebarWrapper isSidebarOpen={isSidebarOpen}>
      <Logo src={logo} />

      <InnerWrapper>
        <Filters>
          {filters?.map(({ title, items }) => (
            <FilterBlock key={title}>
              <FilterTitle>{title}</FilterTitle>
              {items.map(({ id, title, count }) => (
                <FilterButton
                  key={id}
                  id={id}
                  text={title}
                  onClick={onFilterClick}
                  secondaryText={count.toString()}
                  isActive={selectedFilters?.includes(id)}
                />
              ))}
            </FilterBlock>
          ))}
        </Filters>
        <AboutBlockWrapper>
          <AboutBlock />
        </AboutBlockWrapper>
      </InnerWrapper>

      <SidebarButton />
    </SidebarWrapper>
  )
};

export default Sidebar;