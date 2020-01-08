import React, { useEffect } from "react";
import { PageRendererProps } from "gatsby";
import queryString from "query-string";
import Layout from "../../layout"
import { useSidebar } from "../../SidebarProvider"
import { useFilters } from "../../FiltersProvider"
import { AboutBlock, TitleBar, ShadowsContainer } from "../../components";
import {
  AboutBlockWrapper,
  FilterButton,
  HomeWrapper,
  TitleBarWrapper,
} from "./styles"

const Home: React.FC<PageRendererProps> = ({ location }) => {
  const { toggleSidebar } = useSidebar()
  const {
    setCategoryFilters,
    subCategoryFilters,
    setSubCategoryFilters,
    setCategoryFiltersTouched,
    setSubCategoryFiltersTouched,
  } = useFilters()

  useEffect(() => {
    if (location.search) {
      const queryParams: {
        categories?: string
        subCategories?: string
      } = queryString.parse(location.search)

      if (queryParams.categories) {
        setCategoryFiltersTouched(true)
        setCategoryFilters(queryParams.categories.split(","))
      } else {
        setCategoryFilters([]);
      }

      if (queryParams.subCategories) {
        setSubCategoryFiltersTouched(true)
        setSubCategoryFilters(queryParams.subCategories.split(","))
      } else {
        setSubCategoryFilters([]);
      }
    } else {
       setCategoryFilters([]);
       setSubCategoryFilters([]);
    }
  }, [location.search])

  console.log(subCategoryFilters);
  return (
    <Layout>
      <HomeWrapper>
        <AboutBlockWrapper>
          <AboutBlock />
          <FilterButton onClick={toggleSidebar}>Filter shadows</FilterButton>
        </AboutBlockWrapper>

        <TitleBarWrapper>
          <TitleBar />
        </TitleBarWrapper>

        <ShadowsContainer />
      </HomeWrapper>
    </Layout>
  )
}

export default Home;
