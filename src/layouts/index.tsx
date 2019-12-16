import React from 'react';
import Helmet from 'react-helmet';

import './index.css'

type DefaultLayoutProps = {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => (
  <>
   <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children}
  </>
)

export default DefaultLayout
