import React from 'react';
import { SidebarButtonWrapper } from "./styles";

type SidebarButtonProps = {
  onClick?: () => void
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ onClick }) => {
  return (
    <SidebarButtonWrapper onClick={onClick}>
      + Suggest a new shadow
    </SidebarButtonWrapper>
  );
};

export default SidebarButton;