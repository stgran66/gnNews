import { Layout, Menu } from 'antd';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

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
  label: country.name,
}));

export const SideMenu = () => {
  const navigate = useNavigate();
  const { code } = useParams();

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
        <NavLink to='/'>
          <h2 style={{ color: 'lightgray', textAlign: 'center' }}>
            <span style={{ color: '#D5EB04' }}>gn</span>
            News
          </h2>
        </NavLink>
      </div>
      <Menu
        theme='dark'
        mode='inline'
        selectedKeys={code ? [code] : []}
        items={items}
        onSelect={({ key }) => {
          navigate(`country/${key}`);
        }}
      />
    </Sider>
  );
};
