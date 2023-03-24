import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';
import { useIntl } from 'react-intl';

import { useAppDispatch, useAppSelector } from 'hooks';
import {
  getNews,
  getMoreNews,
  selectNews,
  selectPage,
  selectIsLoading,
  selectTotal,
  selectView,
} from 'state';
import { PER_PAGE } from 'data';
import { NewsList } from './NewsList/NewsList';

import { StyledContent, StyledButton } from './NewsPage.styled';

export const NewsPage = () => {
  const dispatch = useAppDispatch();
  const { code } = useParams();
  const articles = useAppSelector(selectNews);
  const currentView = useAppSelector(selectView);
  const currentPage = useAppSelector(selectPage);
  const isLoading = useAppSelector(selectIsLoading);
  const totalNews = useAppSelector(selectTotal);
  const totalPages = Math.ceil(totalNews / PER_PAGE);
  const intl = useIntl();

  useEffect(() => {
    if (code) {
      dispatch(getNews(code));
    }
  }, [code, dispatch]);

  const onLoadMore = () => {
    if (code) {
      dispatch(getMoreNews({ country: code, page: currentPage }));
    }
  };

  return (
    <StyledContent>
      <NewsList view={currentView} articles={articles} />
      {!isLoading && currentPage !== totalPages && articles.length > 0 ? (
        <div className='load-more-wrapp'>
          <StyledButton onClick={onLoadMore}>
            {intl.formatMessage({
              id: 'load_more_button',
              defaultMessage: 'load more',
            })}
          </StyledButton>
        </div>
      ) : null}
    </StyledContent>
  );
};
