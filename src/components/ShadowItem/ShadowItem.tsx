import React from 'react'
import { ShadowItemWrapper, Title, Subtitle, StatsWrapper } from "./styles"
import ShadowStats from "./ShadowStats";
import { Button } from "..";
import { useShadowSubCategories } from "../../hooks";
import { ShadowsJson, SubCategoriesJson } from "../../types/graphql";

// TODO move this to util function
const getSubCategoryByID = (subCategories: SubCategoriesJson[], shadowSubCategoryID: ShadowsJson["shadowSubCategoryID"]) =>
  subCategories.find(({ subCategoryID }) => shadowSubCategoryID === subCategoryID);

const ShadowItem: React.FC<ShadowsJson> = ({
  shadowTitle,
  shadowSubCategoryID,
  color,
  alpha,
  blur,
  spread,
  xValue,
  yValue,
}) => {
  const subCategories = useShadowSubCategories();
  const shadowSubCategory = getSubCategoryByID(subCategories, shadowSubCategoryID);

  return (
    <ShadowItemWrapper
      shadowStyles={{ color, alpha, blur, spread, xValue, yValue }}
    >
      <Title>{shadowTitle}</Title>
      <Subtitle>
        {shadowSubCategory ? shadowSubCategory.subCategoryTitle : ""}
      </Subtitle>
      <ShadowStats
        shadowStats={[
          {
            statTitle: "Color",
            statDetail: color,
          },
          {
            statTitle: "Alpha",
            statDetail: alpha,
          },
          {
            statTitle: "Blur",
            statDetail: blur,
          },
          {
            statTitle: "Offset-X",
            statDetail: xValue,
          },
          {
            statTitle: "Offset-Y",
            statDetail: yValue,
          },
        ]}
      />
      <Button className="shadowitem__button" onClick={() => {}}>
        Copy CSS
      </Button>
    </ShadowItemWrapper>
  )
}

export default ShadowItem
