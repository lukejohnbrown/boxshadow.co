import { useStaticQuery, graphql } from "gatsby"
import { SubCategoriesJson } from "../types/graphql"

export const useShadowSubCategories = (): SubCategoriesJson[] => {
  const { allSubCategoriesJson } = useStaticQuery(
    graphql`
      query ShadowSubCategories {
        allSubCategoriesJson {
          nodes {
            subCategoryID
            subCategoryTitle
          }
        }
      }
    `
  )
  return allSubCategoriesJson.nodes
}
