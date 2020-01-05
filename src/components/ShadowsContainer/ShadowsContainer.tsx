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
} from "../../hooks"
import { CategoriesJson, ShadowsJson } from "../../types/graphql";

//TODO Move this to a util function
const constructShadowsByCategory = (
  shadows: ShadowsJson[],
  categories: CategoriesJson[]
) =>
  categories.map(({ categoryTitle, categoryID }) => ({
    categoryTitle: categoryTitle,
    categoryID: categoryID,
    shadows: shadows.filter(
      ({ shadowCategoryID }) => shadowCategoryID === categoryID
    ),
  }))

const ShadowsContainer = () => {
  const shadows = useShadows();
  const categories = useShadowCategories();

  return (
    <ShadowsContainerWrapper>
      {constructShadowsByCategory(shadows, categories).map(
        ({ categoryTitle, categoryID, shadows }) => (
          <Fragment key={categoryID as string}>
            <ShadowsContainerTitle>{categoryTitle}</ShadowsContainerTitle>

            <ShadowItemsWrapper>
              {shadows.map(shadow => (
                <ShadowItemWrapper key={shadow.id}>
                  <ShadowItem {...shadow} />
                </ShadowItemWrapper>
              ))}
            </ShadowItemsWrapper>
          </Fragment>
        )
      )}
    </ShadowsContainerWrapper>
  )
}

export default ShadowsContainer
