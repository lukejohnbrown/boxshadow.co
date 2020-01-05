import React from "react"
import Layout from "../../layout"
import { useSidebar } from "../../SidebarProvider"
import { AboutBlock, TitleBar, ShadowsContainer } from "../../components";
import {
  AboutBlockWrapper,
  FilterButton,
  HomeWrapper,
  TitleBarWrapper,
} from "./styles"

const Home: React.FC = () => {
  const { toggleSidebar } = useSidebar();

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
