import {
  CategoriesJson,
  ShadowsJson,
} from "../types/graphql"

type ShadowCategoryGroup = {
  categoryTitle: CategoriesJson["categoryTitle"];
  categoryID: CategoriesJson["categoryID"];
  shadows: ShadowsJson[]
}

export const constructShadowsByCategory = (
  shadows: ShadowsJson[],
  categories: CategoriesJson[]
): ShadowCategoryGroup[] => {
  return categories.map(({ categoryTitle, categoryID }) => ({
    categoryTitle: categoryTitle,
    categoryID: categoryID,
    shadows: shadows.filter(
      ({ shadowCategoryID }) => shadowCategoryID === categoryID
    ),
  }))
}