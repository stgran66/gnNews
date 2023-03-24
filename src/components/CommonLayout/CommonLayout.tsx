import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import { SideMenu } from 'components/SideMenu';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import { StyledLayout, StyledPageLayout } from './CommmonLayout.styled';

export const CommonLayout = () => {
  return (
    <StyledPageLayout hasSider>
      <SideMenu />
      <StyledLayout>
        <Header />
        <Outlet />
        <Footer />
      </StyledLayout>
    </StyledPageLayout>
  );
};
