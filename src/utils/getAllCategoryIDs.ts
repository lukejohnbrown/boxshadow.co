import { CategoriesJson } from "../types/graphql"

export const getAllCategoryIDs = (allCategories: CategoriesJson[]) =>
  allCategories.map(({ categoryID }) => categoryID);