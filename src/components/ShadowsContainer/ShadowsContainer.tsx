import React, { Fragment } from 'react';
import ScrollContainer from "react-indiana-drag-scroll"

import dragIcon from "../../images/drag-icon.svg";
import { ShadowItem } from "../";
import {
  useShadowCategories,
  useShadows,
} from "../../hooks";
import { filterShadowsByCategoryAndSubCategory, constructShadowsByCategory } from "../../utils";
import { useFilters } from "../../FiltersProvider";

import {
  ShadowsContainerWrapper,
  ShadowsContainerTitle,
  ShadowItemWrapper,
  ShadowItemsWrapper,
  ScrollWrapper,
  ShadowsContainerHint,
} from "./styles"

const ShadowsContainer = () => {
  const shadows = useShadows();
  const categories = useShadowCategories();
  const {
    categoryFilters,
    subCategoryFilters,
    categoryFiltersTouched,
    subCategoryFiltersTouched,
  } = useFilters();

  const filteredShadows = filterShadowsByCategoryAndSubCategory(
    shadows,
    categoryFilters,
    subCategoryFilters,
    categoryFiltersTouched,
    subCategoryFiltersTouched
  );

  const shadowsByCategory = constructShadowsByCategory(
    filteredShadows,
    categories
  );

  return (
    <ShadowsContainerWrapper>
      <ScrollWrapper>
        {!shadowsByCategory.some(({ shadows }) => shadows.length) && (
          <ShadowsContainerTitle>
            No shadows found for selected filters 🤦‍♂️
          </ShadowsContainerTitle>
        )}

        {shadowsByCategory.map(({ categoryTitle, categoryID, shadows }, idx) => (
          <Fragment key={categoryID as string}>
            {shadows.length !== 0 && (
              <>
                <ShadowsContainerTitle>
                  {categoryTitle}
                  {idx === 0 && (
                    <ShadowsContainerHint>
                      <img src={dragIcon} /> Pst, you can drag shadows to explore more...
                    </ShadowsContainerHint>
                  )}
                </ShadowsContainerTitle>
                <ScrollContainer className="scroll-container">
                  <ShadowItemsWrapper shadowCount={shadows.length}>
                    {shadows.map(shadow => (
                      <ShadowItemWrapper key={shadow.id}>
                        <ShadowItem {...shadow} />
                      </ShadowItemWrapper>
                    ))}
                  </ShadowItemsWrapper>
                </ScrollContainer>
              </>
            )}
          </Fragment>
        ))}
      </ScrollWrapper>
    </ShadowsContainerWrapper>
  )
}

export default ShadowsContainer
