import React from "react";
import SidebarProvider from "./src/SidebarProvider";
import FiltersProvider from "./src/FiltersProvider";

const wrapRootElement = ({ element }) => (
  <SidebarProvider>
    <FiltersProvider>
      {element}
    </FiltersProvider>
  </SidebarProvider>
);

export { wrapRootElement };