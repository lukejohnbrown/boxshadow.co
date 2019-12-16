import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from "styled-components";
import { Sidebar } from "../components";
import theme from "../theme";
import './index.css';


type DefaultLayoutProps = {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Sidebar />
    {children}
  </ThemeProvider>
)

export default DefaultLayout
