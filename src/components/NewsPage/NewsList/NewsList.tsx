import { Article } from 'state';
import { StyledList } from './NewsList.styled';

interface NewsListProps {
  view: 'grid' | 'list';
  articles: Article[];
}

export const NewsList: React.FC<NewsListProps> = ({ view, articles }) => (
  <StyledList view={view}>
    {articles.map((article, index) => (
      <li key={index}>
        <p className='article-source'>
          {article.source?.name ? article.source.name : 'unknown'}
        </p>
        {view === 'grid' && (
          <img
            src={
              article.urlToImage
                ? article.urlToImage
                : 'https://via.placeholder.com/600x400?text=No+image+available'
            }
            alt='article'
          />
        )}
        <div>
          <p className='article-title'>{article.title}</p>
          <p className='article-date'>{article.publishedAt}</p>
        </div>
      </li>
    ))}
  </StyledList>
);
