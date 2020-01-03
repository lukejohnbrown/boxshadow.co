import React from 'react'
import { ShadowStatWrapper } from "./styles";

export type ShadowStat = {
  statTitle: string;
  statDetail?: string | null;
}

const ShadowStat: React.FC<ShadowStat> = ({ statTitle, statDetail }) => {
  return (
    <ShadowStatWrapper>
      <span>{statTitle}</span>
      {statDetail}
    </ShadowStatWrapper>
  )
}

export default ShadowStat;
