import {
  ShadowsJson,
} from "../types/graphql"

export const getShadowCountForCategory = (
  shadows: ShadowsJson[],
  categoryID: ShadowsJson["shadowCategoryID"]
) =>
  shadows.filter(
    ({ shadowCategoryID }) => shadowCategoryID === categoryID
  ).length