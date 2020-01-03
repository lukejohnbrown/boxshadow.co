import React from 'react'
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
} from "../../hooks"
import { CategoriesJson, ShadowsJson } from "../../types/graphql";

//TODO Move this to a util function
const constructShadowsByCategory = (
  shadows: ShadowsJson[],
  categories: CategoriesJson[]
) =>
  categories.map(({ categoryTitle, categoryID }) => ({
    categoryTitle: categoryTitle,
    shadows: shadows.filter(
      ({ shadowCategoryID }) => shadowCategoryID === categoryID
    ),
  }));

const ShadowsContainer = () => {
  const shadows = useShadows();
  const categories = useShadowCategories();

  return (
    <ShadowsContainerWrapper>
      {constructShadowsByCategory(shadows, categories).map(({ categoryTitle, shadows }) => (
        <>
          <ShadowsContainerTitle>{categoryTitle}</ShadowsContainerTitle>

          <ShadowItemsWrapper>
            {shadows.map(shadow => (
              <ShadowItemWrapper>
                <ShadowItem {...shadow} />
              </ShadowItemWrapper>
            ))}
          </ShadowItemsWrapper>
        </>
      ))}
    </ShadowsContainerWrapper>
  )
}

export default ShadowsContainer
