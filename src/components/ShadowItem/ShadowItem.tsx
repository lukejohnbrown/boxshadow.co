import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ShadowItemWrapper, Title, Subtitle, StatsWrapper } from "./styles";
import ShadowStats from "./ShadowStats";
import { Button } from "..";
import { useShadowSubCategories } from "../../hooks";
import { ShadowsJson, SubCategoriesJson } from "../../types/graphql";
import { constructBoxShadowStyle } from "../../utils";

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
  const [copied, setCopied] = useState(false);
  const subCategories = useShadowSubCategories();
  const shadowSubCategory = getSubCategoryByID(subCategories, shadowSubCategoryID);
  const boxShadowStyle = constructBoxShadowStyle({
    color,
    alpha,
    blur,
    spread,
    xValue,
    yValue,
  });

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
      <CopyToClipboard text={`box-shadow: ${boxShadowStyle};`} onCopy={() => setCopied(true)}>
        <Button className="shadowitem__button" onClick={() => {}}>
          {copied ? "CSS Copied 🥳" : "Copy CSS"}
        </Button>
      </CopyToClipboard>
    </ShadowItemWrapper>
  )
}

export default ShadowItem
