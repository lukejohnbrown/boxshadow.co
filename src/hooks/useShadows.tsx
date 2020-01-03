import { useStaticQuery, graphql } from "gatsby"
import { ShadowsJson } from "../types/graphql";

export const useShadows = (): ShadowsJson[] => {
  const { allShadowsJson } = useStaticQuery(
    graphql`
      query Shadows {
        allShadowsJson {
          nodes {
            shadowTitle
            shadowCategoryID
            shadowSubCategoryID
            color
            alpha
            blur
            xValue
            yValue
          }
        }
      }
    `
  )
  return allShadowsJson.nodes
}
