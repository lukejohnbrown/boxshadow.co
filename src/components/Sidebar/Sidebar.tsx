import React from "react";
import { SidebarWrapper } from "./styles";

type SidebarProps = {
  filters: {
    [key: string]: {
      [key: string]: string;
    }
  }
  selectedFilters: string[]
}

const Sidebar: React.FC<SidebarProps> = ({ filters, selectedFilters }) => (
  <SidebarWrapper>
    hello
  </SidebarWrapper>
);

export default Sidebar;