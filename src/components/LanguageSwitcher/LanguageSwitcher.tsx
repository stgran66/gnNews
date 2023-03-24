import { Switch } from 'antd';
import { useIntl } from 'react-intl';

import { useAppDispatch } from 'hooks';
import { toggleLang } from 'state';

export const LanguageSwitcher = () => {
  const intl = useIntl();
  const dispatch = useAppDispatch();

  return (
    <Switch
      checkedChildren={
        <img
          style={{ width: '18px' }}
          src='https://flagcdn.com/gb.svg'
          alt='English'
        />
      }
      unCheckedChildren={
        <img
          style={{ width: '18px' }}
          src='https://flagcdn.com/pl.svg'
          alt='Polish'
        />
      }
      defaultChecked={intl.locale === 'en'}
      onChange={() => {
        dispatch(toggleLang(intl.locale === 'en' ? 'pl' : 'en'));
      }}
    />
  );
};
