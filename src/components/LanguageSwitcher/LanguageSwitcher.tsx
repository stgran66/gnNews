import { useIntl } from 'react-intl';

import { useAppDispatch } from 'hooks';
import { toggleLang } from 'state';
import { StyledSwitcher } from './LanguageSwitcher.styled';

export const LanguageSwitcher = () => {
  const intl = useIntl();
  const dispatch = useAppDispatch();

  return (
    <StyledSwitcher
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
