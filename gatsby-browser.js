import React from "react";
import SidebarProvider from "./src/layout/Sidebar/SidebarProvider";

const wrapRootElement = ({ element }) => (
  <SidebarProvider>
    {element}
  </SidebarProvider>
);

export { wrapRootElement };