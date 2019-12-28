import React from 'react'
import { ShadowStatsWrapper } from "./styles";
import ShadowStat from "./ShadowStat";
import { ShadowStat as ShadowStatType } from "./ShadowStat";

type ShadowStatsProps = {
  shadowStats: ShadowStatType[]
}

const ShadowStats: React.FC<ShadowStatsProps> = ({ shadowStats }) => {
  return (
    <ShadowStatsWrapper>
      {shadowStats.map(({ statTitle, statDetail }: ShadowStatType, idx) => (
        <ShadowStat key={idx} statTitle={statTitle} statDetail={statDetail} />
      ))}
    </ShadowStatsWrapper>
  )
}

export default ShadowStats
