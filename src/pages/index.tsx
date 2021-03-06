import React, { useEffect } from "react"
import Helmet from "react-helmet"
import { PageRendererProps } from "gatsby"
import queryString from "query-string"
import Layout from "../layout"
import { useSidebar } from "../SidebarProvider"
import { useFilters } from "../FiltersProvider"
import { AboutBlock, ShadowsContainer } from "../components"
import {
  AboutBlockWrapper,
  FilterButton,
  HomeWrapper,
  TitleBarWrapper,
} from "../styles/home"

const Home: React.FC<PageRendererProps> = ({ location }) => {
  const {
    setCategoryFilters,
    setSubCategoryFilters,
    setCategoryFiltersTouched,
    setSubCategoryFiltersTouched,
    categoryFilters,
    categoryFiltersTouched
  } = useFilters()

  const resetCategories = () => setCategoryFilters([])
  const resetSubCategories = () => setSubCategoryFilters([])

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
        resetCategories();
      }

      if (queryParams.subCategories) {
        setSubCategoryFiltersTouched(true)
        setSubCategoryFilters(queryParams.subCategories.split(","))
      } else {
        resetSubCategories()
      }
    }

    if (!location.search) {
      resetCategories()
      resetSubCategories()
      setSubCategoryFiltersTouched(false);
      setCategoryFiltersTouched(false)
    }
  }, [location.search])

  return (
    <Layout>
      <Helmet
        title="Shadow Gallery | boxshadows.co"
        meta={[
          {
            name: "description",
            content: "Collection of CSS box shadows for your next project",
          },
          {
            name: "keywords",
            content: "css, box-shadow, collection, project, design",
          },
        ]}
      />
      <HomeWrapper>
        <AboutBlockWrapper>
          <AboutBlock />
        </AboutBlockWrapper>
        <ShadowsContainer />
      </HomeWrapper>
    </Layout>
  )
}

export default Home
