import React from 'react'
import { ShadowItemWrapper, Title, Subtitle, StatsWrapper } from "./styles"
import ShadowStats from "./ShadowStats";
import { Button } from "..";
import { ShadowsJson } from "../../types/graphql";


const ShadowItem: React.FC<ShadowsJson> = ({
  shadowTitle,
  shadowSubCategoryID,
  color,
  alpha,
  blur,
  xValue,
  yValue,
}) => {
  return (
    <ShadowItemWrapper>
      <Title>{shadowTitle}</Title>
      <Subtitle>TODO: GET CATEGORY TITLE BY ID</Subtitle>
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
            statTitle: "X Value",
            statDetail: xValue,
          },
          {
            statTitle: "Y Value",
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
