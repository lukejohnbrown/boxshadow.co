import React from "react";
import Layout from "../layout";
import { useSidebar } from "../layout/Sidebar/SidebarProvider";

const TestComponent = () => (
  <p>WTF</p>
);

const BoxShadowCo = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Layout>

    </Layout>
  );
  }

export default BoxShadowCo;