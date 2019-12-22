import React from 'react'
import { useSidebar } from "../../layout/Sidebar/SidebarProvider";
import { OverlayWrapper } from "./styles";

const Overlay = () => {
  const { toggleSidebar, isSidebarOpen } = useSidebar();
  return (
    <OverlayWrapper onClick={toggleSidebar} />
  )
}

export default Overlay
