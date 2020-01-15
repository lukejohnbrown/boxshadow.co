import { ShadowsJson } from "../types/graphql"

export const getShadowCountForSubCategory = (
  shadows: ShadowsJson[],
  subCategoryID: ShadowsJson["shadowSubCategoryID"]
) =>
  shadows.filter(
    ({ shadowSubCategoryID }) => shadowSubCategoryID === subCategoryID
  ).length;