import React from "react"
import Layout from "../../layout"
import { useSidebar } from "../../layout/Sidebar/SidebarProvider"
import { AboutBlock, TitleBar, ShadowItem } from "../../components";
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
        <div>
          <ShadowItem />
          <ShadowItem />
          <ShadowItem />
          <ShadowItem />
        </div>
      </HomeWrapper>
    </Layout>
  )
}

export default Home;
