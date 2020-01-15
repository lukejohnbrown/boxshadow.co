import { SubCategoriesJson } from "../types/graphql"

export const getAllSubCategoryIDs = (allSubCategories: SubCategoriesJson[]) =>
  allSubCategories.map(({ subCategoryID }) => subCategoryID);