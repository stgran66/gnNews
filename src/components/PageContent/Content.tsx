import { Layout, Button } from 'antd';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { getNews, getMoreNews } from '../../state/news/operations';
import { useParams } from 'react-router-dom';
import {
  selectNews,
  selectPage,
  selectIsLoading,
  selectTotal,
} from '../../state/news/selectors';
import { selectView } from 'state/display/selectors';
import { PER_PAGE } from 'data/vars';
import { NewsList } from './NewsList/NewsList';
const { Content } = Layout;

export const Main = () => {
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
    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
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
      {!isLoading && currentPage !== totalPages ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={onLoadMore}>load more</Button>
        </div>
      ) : null}
    </Content>
  );
};
