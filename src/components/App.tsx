import { Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { i18n } from 'services/i18n';

import { useAppSelector } from 'hooks';
import { selectLang } from 'state';

import { CommonLayout } from 'components/CommonLayout';
import { NotFoundPage } from 'components/NotFoundPage';
import { NewsPage } from 'components/NewsPage';
import { HomePage } from 'components/HomePage';

export const App = () => {
  const lang = useAppSelector(selectLang);

  const messages = i18n.getMessages(lang);

  return (
    <IntlProvider
      messages={messages}
      key={lang}
      locale={lang}
      defaultLocale={i18n.getDefaultLocale()}
    >
      <Routes>
        <Route path='/' element={<CommonLayout />}>
          <Route index element={<HomePage />} />
          <Route path='country/:code' element={<NewsPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </IntlProvider>
  );
};
