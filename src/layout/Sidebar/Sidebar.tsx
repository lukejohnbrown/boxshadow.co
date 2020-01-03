import React from "react";
import { StaticQuery } from "gatsby"
import { FilterButton } from "../../components";
import logo from "../../images/logo.svg";
import SidebarButton from "./SidebarButton";
import { useSidebar } from "./SidebarProvider";
import { AboutBlock } from "../../components";
import { useShadowCategories, useShadows, useShadowSubCategories } from "../../hooks";
import { ShadowsJson } from "../../types/graphql";
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

const getShadowCountForCategory = (shadows: ShadowsJson[], categoryID: ShadowsJson["shadowCategoryID"]) =>
  shadows.filter(({ shadowCategoryID }) => shadowCategoryID === categoryID)
    .length

const getShadowCountForSubCategory = (
  shadows: ShadowsJson[],
  subCategoryID: ShadowsJson["shadowSubCategoryID"]
) =>
  shadows.filter(
    ({ shadowSubCategoryID }) => shadowSubCategoryID === subCategoryID
  ).length

const Sidebar: React.FC<SidebarProps> = () => {
  const { isSidebarOpen } = useSidebar();
  const categories = useShadowCategories();
  const subCategories = useShadowSubCategories()
  const shadows = useShadows();

  return (
    <SidebarWrapper isSidebarOpen={isSidebarOpen}>
      <Logo src={logo} />

      <InnerWrapper>
        {categories && shadows && (
          <Filters>
            <FilterBlock>
              <FilterTitle>Box Shadow Style</FilterTitle>
              {categories.map(({ categoryID, categoryTitle }) => (
                <FilterButton
                  key={categoryID as string}
                  id={categoryID as string}
                  text={categoryTitle}
                  onClick={() => {}}
                  secondaryText={getShadowCountForCategory(
                    shadows,
                    categoryID
                  ).toString()}
                  isActive
                />
              ))}
            </FilterBlock>
            <FilterBlock>
              <FilterTitle>Design Library</FilterTitle>
              {subCategories.map(({ subCategoryID, subCategoryTitle }) => (
                <FilterButton
                  key={subCategoryID as string}
                  id={subCategoryID as string}
                  text={subCategoryTitle}
                  onClick={() => {}}
                  secondaryText={getShadowCountForSubCategory(
                    shadows,
                    subCategoryID
                  ).toString()}
                  isActive
                />
              ))}
            </FilterBlock>
          </Filters>
        )}
        <AboutBlockWrapper>
          <AboutBlock />
        </AboutBlockWrapper>
      </InnerWrapper>

      <SidebarButton />
    </SidebarWrapper>
  )
};

export default Sidebar;