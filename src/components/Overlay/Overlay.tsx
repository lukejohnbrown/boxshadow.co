import React from 'react'
import { useSidebar } from "../../SidebarProvider";
import { OverlayWrapper } from "./styles";

const Overlay: React.FC = () => {
  const { toggleSidebar, isSidebarOpen } = useSidebar();
  return (
    <OverlayWrapper onClick={toggleSidebar} />
  )
}

export default Overlay
