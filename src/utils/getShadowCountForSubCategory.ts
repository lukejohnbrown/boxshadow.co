import { ShadowsJson } from "../types/graphql"

export const getShadowCountForSubCategory = (
  shadows: ShadowsJson[],
  categoryID: ShadowsJson["shadowSubCategoryID"]
) =>
  shadows.filter(
    ({ shadowSubCategoryID }) => shadowSubCategoryID === categoryID
  ).length;