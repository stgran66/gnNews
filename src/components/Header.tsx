import { Layout, Button } from 'antd';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { selectView } from 'state/display/selectors';
import { toggleView } from 'state/display/slice';

const { Header } = Layout;

export const PageHeader = () => {
  const currentView = useAppSelector(selectView);
  const dispatch = useAppDispatch();
  return (
    <Header
      style={{
        padding: 20,
        background: 'navy',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <Button
        onClick={() => {
          dispatch(toggleView(currentView === 'list' ? 'grid' : 'list'));
        }}
      >
        Change view
      </Button>
      <Button>Popup</Button>
    </Header>
  );
};
