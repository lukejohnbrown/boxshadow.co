import React, { Fragment } from 'react'
import {
  ShadowsContainerWrapper,
  ShadowsContainerTitle,
  ShadowItemWrapper,
  ShadowItemsWrapper
} from "./styles"
import { ShadowItem } from "../";
import {
  useShadowCategories,
  useShadows,
  useShadowSubCategories,
} from "../../hooks";
import { useFilters } from "../../FiltersProvider";
import { CategoriesJson, ShadowsJson, SubCategoriesJson } from "../../types/graphql";

type ShadowCategoryGroup = {
  categoryTitle: CategoriesJson["categoryTitle"];
  categoryID: CategoriesJson["categoryID"];
  shadows: ShadowsJson[]
}

//TODO Move this to a util function
const constructShadowsByCategory = (
  shadows: ShadowsJson[],
  categories: CategoriesJson[]
): ShadowCategoryGroup[] => {
  return categories.map(({ categoryTitle, categoryID }) => ({
    categoryTitle: categoryTitle,
    categoryID: categoryID,
    shadows: shadows.filter(
      ({ shadowCategoryID }) => shadowCategoryID === categoryID
    ),
  }));
}

//TODO Move this to a util function
const filterShadowsByCategoryAndSubCategory = (
  shadows: ShadowsJson[],
  categoryFilters: CategoriesJson["categoryID"][],
  subCategoryFilters: SubCategoriesJson["subCategoryID"][],
  categoryFiltersTouched: boolean,
  subCategoryFiltersTouched: boolean
) => {
  return shadows
    .filter(({ shadowCategoryID }) => {
      if (!categoryFiltersTouched) return true;
      return categoryFilters.includes(shadowCategoryID);
    })
    .filter(({ shadowSubCategoryID }) => {
      if (!subCategoryFiltersTouched) return true;
      return subCategoryFilters.includes(shadowSubCategoryID);
    })
}

const ShadowsContainer = () => {
  const shadows = useShadows();
  const categories = useShadowCategories();
  const {
    categoryFilters,
    subCategoryFilters,
    categoryFiltersTouched,
    subCategoryFiltersTouched,
  } = useFilters();

  const filteredShadows = filterShadowsByCategoryAndSubCategory(
    shadows,
    categoryFilters,
    subCategoryFilters,
    categoryFiltersTouched,
    subCategoryFiltersTouched
  );

  const shadowsByCategory = constructShadowsByCategory(
    filteredShadows,
    categories
  );

  return (
    <ShadowsContainerWrapper>
      {!shadowsByCategory.some(({ shadows }) => shadows.length) && (
        <ShadowsContainerTitle>No shadows found for selected filters 🤦‍♂️</ShadowsContainerTitle>
      )}
      {shadowsByCategory.map(({ categoryTitle, categoryID, shadows }) => (
        <Fragment key={categoryID as string}>
          {shadows.length !== 0 && (
            <>
              <ShadowsContainerTitle>{categoryTitle}</ShadowsContainerTitle>

              <ShadowItemsWrapper>
                {shadows.map(shadow => (
                  <ShadowItemWrapper key={shadow.id}>
                    <ShadowItem {...shadow} />
                  </ShadowItemWrapper>
                ))}
              </ShadowItemsWrapper>
            </>
          )}
        </Fragment>
      ))}
    </ShadowsContainerWrapper>
  )
}

export default ShadowsContainer
