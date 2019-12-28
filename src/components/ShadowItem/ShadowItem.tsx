import React from 'react'
import { ShadowItemWrapper, Title, Subtitle, StatsWrapper } from "./styles"
import ShadowStats from "./ShadowStats";
import { Button } from "..";

const ShadowItem: React.FC = () => {
  return (
    <ShadowItemWrapper>
      <Title>Material 01</Title>
      <Subtitle>Subtle shadow</Subtitle>
      <ShadowStats shadowStats={[
        {
          statTitle: "Color",
          statDetail: "#000000"
        },
        {
          statTitle: "Alpha",
          statDetail: "0.25"
        },
        {
          statTitle: "Blur",
          statDetail: "25%"
        },
        {
          statTitle: "X Value",
          statDetail: "003px"
        },
        {
          statTitle: "Y Value",
          statDetail: "003px"
        }
      ]} />
      <Button className="shadowitem__button" onClick={() => {}}>Copy CSS</Button>
    </ShadowItemWrapper>
  )
}

export default ShadowItem
