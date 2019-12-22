
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyle from "./GlobalStyle";
import Sidebar from "./Sidebar";
import { useSidebar } from "./Sidebar/SidebarProvider"
import { Topbar, Overlay } from "../components";

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

const filters: FilterGroup[] = [
  {
    title: "Box shadow style",
    items: [
      {
        id: "1",
        title: "Test",
        count: 20
      },
      {
        id: "2",
        title: "Test",
        count: 20
      },
      {
        id: "3",
        title: "Test",
        count: 20
      },
      {
        id: "4",
        title: "Test",
        count: 20
      }
    ]
  },
];

const allFilterIds = filters.reduce((filterIds: string[], filterGroup: FilterGroup) => {
  filterIds.push(...filterGroup.items.map(filterItem => filterItem.id));
  return filterIds;
}, []);

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const { isSidebarOpen } = useSidebar()
  const [selectedFilters, setSelectedFilters] = useState<string[]>([...allFilterIds]);

  const handleFilterClick = (id: string) => {
    const updatedFilters = [...selectedFilters];
    if (selectedFilters.includes(id)) {
      updatedFilters.splice(updatedFilters.indexOf(id), 1);
    } else {
      updatedFilters.push(id);
    }
    setSelectedFilters(updatedFilters);
  }

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

      <Topbar />

      <Sidebar
        filters={filters}
        selectedFilters={selectedFilters}
        onFilterClick={handleFilterClick}
      />

      <main>{children}</main>
    </ThemeProvider>
  )
};

export default DefaultLayout;
