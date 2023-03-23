import { Route, Routes } from 'react-router-dom';
import { CommonLayout } from './CommonLayout';
import { NotFoundPage } from './NotFoundPage';
import { Main } from './PageContent/Content';
import { HomePage } from './HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CommonLayout />}>
        <Route index element={<HomePage />} />
        <Route path='country/:code' element={<Main />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
