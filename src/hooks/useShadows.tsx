import { useStaticQuery, graphql } from "gatsby"
import { ShadowsJson } from "../types/graphql";

export const useShadows = (): ShadowsJson[] => {
  const { allShadowsJson } = useStaticQuery(
    graphql`
      query Shadows {
        allShadowsJson {
          nodes {
            id
            shadowTitle
            shadowCategoryID
            shadowSubCategoryID
            color
            alpha
            blur
            spread
            xValue
            yValue
          }
        }
      }
    `
  )
  return allShadowsJson.nodes
}
