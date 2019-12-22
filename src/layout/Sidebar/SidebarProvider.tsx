import React, { useContext, useState } from "react";

type SidebarContext = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const SidebarContext = React.createContext<SidebarContext>({} as SidebarContext);

const SidebarProvider:React.FC = ({ children }) => {
  const [isSidebarOpen, setSidebar] = useState<boolean>(false);
  const toggleSidebar = () => {
    setSidebar(!isSidebarOpen);
  }

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext);

export default SidebarProvider;