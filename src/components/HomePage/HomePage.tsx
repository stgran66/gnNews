import { Typography } from 'antd';
import { BsCheck2Circle } from 'react-icons/bs';
import { useIntl } from 'react-intl';

import { StyledSpace } from './HomePage.styled';

const { Title } = Typography;

export const HomePage = () => {
  const intl = useIntl();
  return (
    <StyledSpace direction='vertical' align='start'>
      <Title>
        {intl.formatMessage({
          id: 'greeting',
          defaultMessage:
            "Welcome to <span className='logo-like'>gn</span> News, your go-to source for up-to-date news from around the world.",
        })}
      </Title>
      <div className='desc-wrapper'>
        <div className='logo'>
          <span className='logo-light'>gn</span>News
        </div>
        <ul>
          <li>
            <BsCheck2Circle color={'#001529'} />
            {intl.formatMessage({
              id: 'first_pro',
              defaultMessage:
                'Appeals to targeted audiences interested in news from particular regions.',
            })}
          </li>
          <li>
            <BsCheck2Circle color={'#001529'} />
            {intl.formatMessage({
              id: 'second_pro',
              defaultMessage: 'Provides diverse coverage on global events.',
            })}
          </li>
          <li>
            <BsCheck2Circle color={'#001529'} />
            {intl.formatMessage({
              id: 'third_pro',
              defaultMessage:
                'Potentially creates a loyal and engaged readership.',
            })}
          </li>
          <li>
            <BsCheck2Circle color={'#001529'} />
            {intl.formatMessage({
              id: 'fourth_pro',
              defaultMessage:
                'Provides an easy-to-navigate interface with country-specific categories.',
            })}
          </li>
          <li>
            <BsCheck2Circle color={'#001529'} />
            {intl.formatMessage({
              id: 'fifth_pro',
              defaultMessage:
                'Provides up-to-date news and analysis for users interested in current events.',
            })}
          </li>
        </ul>
      </div>
    </StyledSpace>
  );
};
