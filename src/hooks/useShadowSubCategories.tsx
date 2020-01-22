import { useStaticQuery, graphql } from "gatsby"
import { SubCategoriesJson } from "../types/graphql"

export const useShadowSubCategories = (): SubCategoriesJson[] => {
  const { allSubCategoriesJson } = useStaticQuery(
    graphql`
      query ShadowSubCategories {
        allSubCategoriesJson {
          nodes {
            categoryID
            categoryTitle
            icon {
              publicURL
            }
          }
        }
      }
    `
  )
  return allSubCategoriesJson.nodes
}
