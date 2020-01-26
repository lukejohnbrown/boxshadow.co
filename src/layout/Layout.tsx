
import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyle from "./GlobalStyle";
import Sidebar from "./Sidebar";
import { useSidebar } from "../SidebarProvider";
import { Overlay, Header } from "../components";

type FilterItem = {
  id: string;
  title: string;
  count: number;
}

type FilterGroup = {
  title: string;
  items: FilterItem[];
}

type DefaultLayoutProps = {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const { isSidebarOpen } = useSidebar();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet
        title="Box Shadows"
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

      {isSidebarOpen && <Overlay />}

      <Header />

      <Sidebar />

      <main>{children}</main>
    </ThemeProvider>
  )
};

export default DefaultLayout;
