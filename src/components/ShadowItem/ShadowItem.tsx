import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";

import StatsCoursel from "./StatsCarousel";
import { ShadowItemWrapper, Title, Subtitle, StatsCarouselWrapper } from "./styles"
import { useShadowSubCategories } from "../../hooks";
import {
  ShadowsJson,
  SubCategoriesJson,
  ShadowsJsonLayers,
} from "../../types/graphql"
import { constructBoxShadowStyle, getSubCategoryByID } from "../../utils"

const ShadowItem: React.FC<ShadowsJson> = ({
  shadowTitle,
  shadowSubCategoryID,
  layers
}) => {
  const [copied, setCopied] = useState(false);
  const subCategories = useShadowSubCategories();
  const shadowSubCategory = getSubCategoryByID(subCategories, shadowSubCategoryID);
  const boxShadowStyle = constructBoxShadowStyle(layers as ShadowsJsonLayers[])

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
  }, [copied]);

  return (
    <ShadowItemWrapper boxShadowStyle={boxShadowStyle}>
      <Title>{shadowTitle}</Title>
      <Subtitle>
        {shadowSubCategory ? shadowSubCategory.categoryTitle : ""}
      </Subtitle>

      <StatsCarouselWrapper>
        <StatsCoursel shadowLayers={layers} />
      </StatsCarouselWrapper>

      <CopyToClipboard
        text={`box-shadow: ${boxShadowStyle};`}
        onCopy={() => setCopied(true)}
      >
        <button className="shadowitem__button" onClick={() => {}}>
          {copied ? "CSS Copied 🥳" : "Copy CSS"}
        </button>
      </CopyToClipboard>
    </ShadowItemWrapper>
  )
}

export default ShadowItem
