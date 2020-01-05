
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyle from "./GlobalStyle";
import Sidebar from "./Sidebar";
import { useSidebar } from "../SidebarProvider"
import { TopBar, Overlay } from "../components";

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
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      />

      {isSidebarOpen && <Overlay />}

      <TopBar />

      <Sidebar />

      <main>{children}</main>
    </ThemeProvider>
  )
};

export default DefaultLayout;
