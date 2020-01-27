import React, { useState, useEffect } from "react";
import xor from "lodash.xor";
import { Scrollbars } from "react-custom-scrollbars"
import { navigate } from "gatsby";
import { FilterButton, ResetButton } from "../../components";
import logo from "../../images/logo.svg";
import { useSidebar } from "../../SidebarProvider";
import { useFilters } from "../../FiltersProvider";
import { AboutBlock } from "../../components";
import { getShadowCountForCategory, getShadowCountForSubCategory, getAllCategoryIDs, getAllSubCategoryIDs } from "../../utils";
import { useShadowCategories, useShadows, useShadowSubCategories } from "../../hooks";
import { CategoriesJson, SubCategoriesJson } from "../../types/graphql";
import {
  FilterBlock,
  FilterTitle,
  InnerWrapper,
  Logo,
  SidebarWrapper,
  AboutBlockWrapper,
  Filters,
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

  const handleSubCategoryClick = (categoryID: SubCategoriesJson["categoryID"]) => {
     const updatedSubCategoryFilters = !subCategoryFiltersTouched
       ? xor(getAllSubCategoryIDs(subCategories), [categoryID])
       : xor(subCategoryFilters, [categoryID])

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
      queryString = `${queryString}${selectedCategories.length ? "&" : ""}subCategories=${selectedSubCategories.join(",")}`
    }

    navigate(`/?${queryString}`);
  }, [selectedCategories, selectedSubCategories]);

  return (
    <Scrollbars
      style={{ width: 280 }}
      autoHeight
      autoHeightMin={0}
      autoHeightMax={4000}
    >
      <SidebarWrapper isSidebarOpen={isSidebarOpen}>
        <InnerWrapper>
          {categories && shadows && (
            <Filters>
              <FilterBlock>
                <FilterTitle>
                  Shadow weight
                  <ResetButton
                    buttonTitle="Reset Category Filters"
                    onClick={() =>
                      setSelectedCategories(
                        getAllCategoryIDs(categories) as string[]
                      )
                    }
                  />
                </FilterTitle>
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
                <FilterTitle>
                  Shadow source
                  <ResetButton
                    buttonTitle="Reset Design Library Filters"
                    onClick={() =>
                      setSelectedSubCategories(
                        getAllSubCategoryIDs(subCategories) as string[]
                      )
                    }
                  />
                </FilterTitle>
                {subCategories.map(({ categoryID, categoryTitle, icon }) => (
                  <FilterButton
                    key={categoryID as string}
                    id={categoryID as string}
                    text={categoryTitle}
                    onClick={handleSubCategoryClick}
                    secondaryText={getShadowCountForSubCategory(
                      shadows,
                      categoryID
                    ).toString()}
                    icon={icon}
                    isActive={
                      !subCategoryFiltersTouched ||
                      subCategoryFilters.includes(categoryID as string)
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
      </SidebarWrapper>
    </Scrollbars>
  )
};

export default Sidebar;