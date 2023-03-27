import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { useAppSelector } from 'hooks';
import { selectNews } from 'state';
import { StyledFooter } from './Footer.styled';

export const Footer = () => {
  const location = useLocation();
  const isOnNewsPage = location.pathname?.includes('country');
  const intl = useIntl();

  const articles = useAppSelector(selectNews);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
  );

  const updateTime = () => {
    setTime(
      new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    );
  };

  setInterval(updateTime);

  return (
    <StyledFooter>
      {isOnNewsPage ? (
        <p>
          {intl.formatMessage({
            id: 'footer_news_count',
            defaultMessage: 'News loaded',
          })}
          : {articles.length}
        </p>
      ) : (
        <p>
          {intl.formatMessage({
            id: 'footer_check',
            defaultMessage: 'News loaded',
          })}
        </p>
      )}
      <p className='clock'>{time}</p>
    </StyledFooter>
  );
};
