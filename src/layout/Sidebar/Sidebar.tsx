import React, { useState, useEffect } from "react";
import xor from "lodash.xor";
import { navigate } from "gatsby";
import { FilterButton } from "../../components";
import logo from "../../images/logo.svg";
import SidebarButton from "./SidebarButton";
import { useSidebar } from "../../SidebarProvider";
import { useFilters } from "../../FiltersProvider";
import { AboutBlock } from "../../components";
import { useShadowCategories, useShadows, useShadowSubCategories } from "../../hooks";
import { ShadowsJson, CategoriesJson, SubCategoriesJson } from "../../types/graphql";
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

// TODO move this to util function
const getShadowCountForCategory = (shadows: ShadowsJson[], categoryID: ShadowsJson["shadowCategoryID"]) =>
  shadows.filter(({ shadowCategoryID }) => shadowCategoryID === categoryID)
    .length

// TODO move this to util function
const getShadowCountForSubCategory = (
  shadows: ShadowsJson[],
  subCategoryID: ShadowsJson["shadowSubCategoryID"]
) =>
  shadows.filter(
    ({ shadowSubCategoryID }) => shadowSubCategoryID === subCategoryID
  ).length;

// TODO move this to util function
const getAllCategoryIDs = (allCategories: CategoriesJson[]) =>
  allCategories.map(({ categoryID }) => categoryID);

// TODO move this to util function
const getAllSubCategoryIDs = (allSubCategories: SubCategoriesJson[]) =>
  allSubCategories.map(({ subCategoryID }) => subCategoryID);

const Sidebar: React.FC<SidebarProps> = () => {
  const { isSidebarOpen } = useSidebar();
  const {
    categoryFilters,
    subCategoryFilters,
    categoryFiltersTouched,
    subCategoryFiltersTouched,
  } = useFilters();
  const categories = useShadowCategories();
  const subCategories = useShadowSubCategories();
  const shadows = useShadows();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);

  const handleCategoryClick = (categoryID: CategoriesJson["categoryID"]) => {
    const updatedCategoryFilters = !categoryFiltersTouched
      ? xor(getAllCategoryIDs(categories), [categoryID])
      : xor(categoryFilters, [categoryID]);

    if (updatedCategoryFilters) {
      setSelectedCategories(updatedCategoryFilters as string[]);
    }
  }

  const handleSubCategoryClick = (subCategoryID: SubCategoriesJson["subCategoryID"]) => {
     const updatedSubCategoryFilters = !subCategoryFiltersTouched
       ? xor(getAllSubCategoryIDs(subCategories), [subCategoryID])
       : xor(subCategoryFilters, [subCategoryID])

    if (updatedSubCategoryFilters) {
      setSelectedSubCategories(updatedSubCategoryFilters as string[])
    }
  }

  useEffect(() => {
    let queryString = ``;
    if (selectedCategories.length) {
      queryString = `${queryString}categories=${selectedCategories.join(",")}`;
    }

    if (selectedSubCategories.length) {
      queryString = `${queryString}${selectedCategories.length ? "&" : "?"}subCategories=${selectedSubCategories.join(",")}`
    }
    console.log(queryString);
    navigate(`/?${queryString}`);
  }, [selectedCategories, selectedSubCategories]);

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
                  onClick={handleCategoryClick}
                  secondaryText={getShadowCountForCategory(
                    shadows,
                    categoryID
                  ).toString()}
                  isActive={
                    !categoryFiltersTouched ||
                    categoryFilters.includes(categoryID as string)
                  }
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
                  onClick={handleSubCategoryClick}
                  secondaryText={getShadowCountForSubCategory(
                    shadows,
                    subCategoryID
                  ).toString()}
                  isActive={
                    !subCategoryFiltersTouched ||
                    subCategoryFilters.includes(subCategoryID as string)
                  }
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