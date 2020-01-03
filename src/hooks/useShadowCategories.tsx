import { useStaticQuery, graphql } from "gatsby";
import { CategoriesJson } from "../types/graphql";

export const useShadowCategories = (): CategoriesJson[] => {
  const { allCategoriesJson } = useStaticQuery(
    graphql`
      query ShadowCategories {
        allCategoriesJson {
          nodes {
            categoryID
            categoryTitle
          }
        }
      }
    `
  )
  return allCategoriesJson.nodes;
}