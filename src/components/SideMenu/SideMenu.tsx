import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { Menu, MenuProps } from 'antd';
import { useIntl } from 'react-intl';

import { countriesList } from 'data/countries';

import { StyledSider, StyledImg } from './SideMenu.styled';

export const SideMenu = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const intl = useIntl();

  const items: MenuProps['items'] = countriesList.map((country) => ({
    key: country.code,
    icon: <StyledImg src={country.flag} alt={country.name} />,
    label: (
      <span>
        {intl.formatMessage({
          id: country.code,
          defaultMessage: '',
        })}
      </span>
    ),
  }));

  return (
    <StyledSider width={'14vw'}>
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
