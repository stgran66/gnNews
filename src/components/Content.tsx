import { Layout, Avatar, Button, List, Skeleton } from 'antd';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { getNews, getMoreNews } from '../state/news/operations';
import { useParams } from 'react-router-dom';
import { selectNews, selectPage } from '../state/news/selectors';
import { selectView } from 'state/display/selectors';
const { Content } = Layout;

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export const Main = () => {
  const dispatch = useAppDispatch();
  const { code } = useParams();
  const articles = useAppSelector(selectNews);
  const currentView = useAppSelector(selectView);
  const currentPage = useAppSelector(selectPage);
  console.log(currentPage);

  const [initLoading, setInitLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (code) {
      dispatch(getNews(code));
    }
    setTimeout(() => {
      setInitLoading(false);
      setLoading(false);
    }, 2000);
  }, [code, dispatch]);

  const onLoadMore = () => {
    if (code) {
      dispatch(getMoreNews({ country: code, page: currentPage }));
    }
    // setLoading(true);

    // fetch(fakeDataUrl)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setLoading(false);
    //     // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
    //     // In real scene, you can using public method of react-virtualized:
    //     // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
    //     window.dispatchEvent(new Event('resize'));
    //   });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
      <div
        style={{
          padding: 24,
          textAlign: 'center',
          background: 'white',
        }}
      >
        <List
          className='demo-loadmore-list'
          loading={initLoading}
          itemLayout='horizontal'
          loadMore={loadMore}
          dataSource={articles}
          grid={
            currentView === 'grid'
              ? {
                  column: 3,
                  gutter: 20,
                  xs: 1,
                  sm: 2,
                  md: 4,
                  lg: 4,
                  xl: 6,
                  xxl: 3,
                }
              : undefined
          }
          renderItem={(item) => (
            <List.Item>
              <Skeleton title={false} loading={loading} active>
                <List.Item.Meta
                  avatar={item.source?.name ? item.source.name : 'unknown'}
                  title={item.title}
                  description={item.publishedAt}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </Content>
  );
};
