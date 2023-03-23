import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { Menu, MenuProps } from 'antd';

import { countriesList } from 'data/countries';

import { StyledSider, StyledImg } from './SideMenu.styled';

const items: MenuProps['items'] = countriesList.map((country) => ({
  key: country.code,
  icon: <StyledImg src={country.flag} alt={country.name} />,
  label: country.name,
}));

export const SideMenu = () => {
  const navigate = useNavigate();
  const { code } = useParams();

  return (
    <StyledSider style={{}}>
      <NavLink to='/'>
        <h2>
          <span>gn</span>
          News
        </h2>
      </NavLink>
      <Menu
        theme='dark'
        mode='inline'
        selectedKeys={code ? [code] : []}
        items={items}
        onSelect={({ key }) => {
          navigate(`country/${key}`);
        }}
      />
    </StyledSider>
  );
};
