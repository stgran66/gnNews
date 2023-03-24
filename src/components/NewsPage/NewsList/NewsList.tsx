import { Article, View } from 'state';
import { NewsArticle } from '../Article/Article';

import { StyledList } from './NewsList.styled';

interface NewsListProps {
  view: View;
  articles: Article[];
}

export const NewsList: React.FC<NewsListProps> = ({ view, articles }) => (
  <StyledList view={view}>
    {articles.map((article, index) => (
      <NewsArticle key={index} article={article} view={view} />
    ))}
  </StyledList>
);
