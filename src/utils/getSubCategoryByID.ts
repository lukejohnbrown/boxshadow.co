import {
  ShadowsJson,
  SubCategoriesJson,
} from "../types/graphql"

export const getSubCategoryByID = (
  subCategories: SubCategoriesJson[],
  shadowSubCategoryID: ShadowsJson["shadowSubCategoryID"]
) =>
  subCategories.find(
    ({ subCategoryID }) => shadowSubCategoryID === subCategoryID
  )
