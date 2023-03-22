import { Layout, theme } from 'antd';

import { SideMenu } from './SideMenu';

import { PageHeader } from './Header';
import { Main } from './Content';
import { PageFooter } from './Footer';

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <SideMenu />
      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <PageHeader />
        <Main />
        <PageFooter />
      </Layout>
    </Layout>
  );
}

export default App;
