import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";

import StatsCoursel from "./StatsCarousel";
import {
  ShadowItemWrapper,
  Title,
  CopyButton,
  StatsCarouselWrapper,
  TitleWrapper,
  CategoryLogo
} from "./styles"
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
      <TitleWrapper>
        {shadowSubCategory && shadowSubCategory.icon && (
          <CategoryLogo
            src={shadowSubCategory.icon.publicURL || ""}
            alt={`${shadowSubCategory.categoryTitle} icon`}
          />
        )}
        <Title>{shadowTitle}</Title>
      </TitleWrapper>

      <StatsCarouselWrapper>
        <StatsCoursel shadowLayers={layers} />
        <CopyToClipboard
          text={`box-shadow: ${boxShadowStyle};`}
          onCopy={() => setCopied(true)}
        >
          <CopyButton copied={copied}>
            {copied ? "CSS Copied 🥳" : "Copy CSS"}
          </CopyButton>
        </CopyToClipboard>
      </StatsCarouselWrapper>
    </ShadowItemWrapper>
  )
}

export default ShadowItem
