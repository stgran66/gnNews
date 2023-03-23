import { Route, Routes } from 'react-router-dom';

import { CommonLayout } from 'components/CommonLayout';
import { NotFoundPage } from 'components/NotFoundPage';
import { NewsPage } from 'components/NewsPage';
import { HomePage } from 'components/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<CommonLayout />}>
        <Route index element={<HomePage />} />
        <Route path='country/:code' element={<NewsPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
