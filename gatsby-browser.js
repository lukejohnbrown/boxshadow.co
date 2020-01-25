import React from "react";
import SidebarProvider from "./src/SidebarProvider";
import FiltersProvider from "./src/FiltersProvider";
import ErrorBoundary from "./src/ErrorBoundary";

const wrapRootElement = ({ element }) => (
  <ErrorBoundary>
    <SidebarProvider>
      <FiltersProvider>
        {element}
      </FiltersProvider>
    </SidebarProvider>
  </ErrorBoundary>
);

export { wrapRootElement };