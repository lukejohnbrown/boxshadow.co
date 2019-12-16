import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  width: 100%;
  display: block;
  background: ${({ theme: { palette } }) => palette.grey[200]};
`;