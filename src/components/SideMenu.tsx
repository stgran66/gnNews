import { Layout, Menu } from 'antd';

import type { MenuProps } from 'antd';

import { countriesList } from '../data/countries';

const { Sider } = Layout;

const items: MenuProps['items'] = countriesList.map((country) => ({
  key: country.code,
  icon: (
    <img
      width={50}
      height={30}
      style={{ objectFit: 'cover' }}
      src={country.flag}
      alt={country.name}
    ></img>
  ),
  label: `${country.name}`,
}));

export const SideMenu = () => {
  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          height: 32,
          margin: 16,
        }}
      >
        <h2 style={{ color: 'lightgray', textAlign: 'center' }}>
          <span style={{ color: '#D5EB04' }}>gn</span>
          News
        </h2>
      </div>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['pl']}
        items={items}
        onClick={() => {
          console.log('1');
        }}
      />
    </Sider>
  );
};
