import { Result } from 'antd';
import { NavLink } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={<NavLink to='/'>Back Home</NavLink>}
    />
  );
};
