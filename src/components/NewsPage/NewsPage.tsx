import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';

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

import { StyledContent } from './NewsPage.styled';

export const NewsPage = () => {
  const dispatch = useAppDispatch();
  const { code } = useParams();
  const articles = useAppSelector(selectNews);
  const currentView = useAppSelector(selectView);
  const currentPage = useAppSelector(selectPage);
  const isLoading = useAppSelector(selectIsLoading);
  const totalNews = useAppSelector(selectTotal);
  const totalPages = Math.ceil(totalNews / PER_PAGE);

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
      {/* <List
          // className='demo-loadmore-list'
          loading={isLoading}
          itemLayout='vertical'
          loadMore={loadMore}
          dataSource={articles}
          view={currentView}
          renderItem={(item): React.ReactNode => (
            <StyledListItem>
              <Skeleton title={false} loading={isLoading} active>
                <List.Item.Meta
                  avatar={item.source?.name ? item.source.name : 'unknown'}
                  title={item.title}
                  description={item.publishedAt}
                />
              </Skeleton>
            </StyledListItem>
          )}
        /> */}
      <NewsList view={currentView} articles={articles} />
      {!isLoading && currentPage !== totalPages && articles.length > 0 ? (
        <div className='load-more-wrapp'>
          <Button onClick={onLoadMore}>load more</Button>
        </div>
      ) : null}
    </StyledContent>
  );
};
