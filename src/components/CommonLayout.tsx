import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';

import { SideMenu } from './SideMenu';

import { PageHeader } from './Header';
import { PageFooter } from './Footer';

export const CommonLayout = () => {
  return (
    <Layout hasSider>
      <SideMenu />
      <Layout
        className='site-layout'
        style={{
          marginLeft: 200,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <PageHeader />
        <Outlet />
        <PageFooter />
      </Layout>
    </Layout>
  );
};
