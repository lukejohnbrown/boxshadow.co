import React from "react"
import Layout from "../../layout"
import { useSidebar } from "../../layout/Sidebar/SidebarProvider"
import { AboutBlock } from "../../components";
import { AboutBlockWrapper, FilterButton } from "./styles"

const Home = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Layout>
      <AboutBlockWrapper>
        <AboutBlock />
        <FilterButton onClick={toggleSidebar}>Filter shadows</FilterButton>
      </AboutBlockWrapper>
    </Layout>
  )
}

export default Home;
