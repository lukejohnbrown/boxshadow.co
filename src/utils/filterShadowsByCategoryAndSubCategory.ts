import {
  CategoriesJson,
  ShadowsJson,
  SubCategoriesJson,
} from "../types/graphql"

export const filterShadowsByCategoryAndSubCategory = (
  shadows: ShadowsJson[],
  categoryFilters: CategoriesJson["categoryID"][],
  subCategoryFilters: SubCategoriesJson["categoryID"][],
  categoryFiltersTouched: boolean,
  subCategoryFiltersTouched: boolean
) => {
  return shadows
    .filter(({ shadowCategoryID }) => {
      if (!categoryFiltersTouched) return true
      return categoryFilters.includes(shadowCategoryID)
    })
    .filter(({ shadowSubCategoryID }) => {
      if (!subCategoryFiltersTouched) return true
      return subCategoryFilters.includes(shadowSubCategoryID)
    })
}
