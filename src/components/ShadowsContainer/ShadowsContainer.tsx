import React from 'react'
import {
  ShadowsContainerWrapper,
  ShadowsContainerTitle,
  ShadowItemWrapper,
  ShadowItemsWrapper
} from "./styles"
import { ShadowItem } from "../";

const ShadowsContainer = () => {
  return (
    <ShadowsContainerWrapper>
      <ShadowsContainerTitle>Subtle Shadows</ShadowsContainerTitle>

      <ShadowItemsWrapper>
        <ShadowItemWrapper>
          <ShadowItem />
        </ShadowItemWrapper>

        <ShadowItemWrapper>
          <ShadowItem />
        </ShadowItemWrapper>

        <ShadowItemWrapper>
          <ShadowItem />
        </ShadowItemWrapper>

        <ShadowItemWrapper>
          <ShadowItem />
        </ShadowItemWrapper>

        <ShadowItemWrapper>
          <ShadowItem />
        </ShadowItemWrapper>
      </ShadowItemsWrapper>
    </ShadowsContainerWrapper>
  )
}

export default ShadowsContainer
