import { useState } from 'react';
import { useIntl } from 'react-intl';

import { Article, View } from 'state';
import { StyledArticleModal, StyledLink } from './Article.styled';

interface NewsArticleProps {
  article: Article;
  view: View;
}

export const NewsArticle: React.FC<NewsArticleProps> = ({ article, view }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const intl = useIntl();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal: React.MouseEventHandler = (event) => {
    event.stopPropagation();
    setIsModalOpen(false);
  };

  const localDateTime = article.publishedAt
    ? `${new Date(
        Date.parse(article.publishedAt)
      ).toLocaleDateString()} ${new Date(
        Date.parse(article.publishedAt)
      ).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })}`
    : 'unknown';

  return (
    <li onClick={showModal}>
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
        <p className='article-date'>{localDateTime}</p>
        <StyledArticleModal
          title={article.title}
          open={isModalOpen}
          onCancel={hideModal}
          closable
          footer={
            <div className='footer-wrapper' style={{}}>
              <StyledLink to={article.url!} target='_blank'>
                {intl.formatMessage({
                  id: 'source_link',
                  defaultMessage: 'Go to source',
                })}
              </StyledLink>
              <p className='article-date'>{localDateTime}</p>
            </div>
          }
        >
          <p className='article-source'>
            {article.source?.name ? article.source.name : 'unknown'}
          </p>
          <img
            className='article-image'
            src={
              article.urlToImage
                ? article.urlToImage
                : 'https://via.placeholder.com/600x400?text=No+image+available'
            }
            alt='article'
          />

          <p className='article-content'>{article.content}</p>
          <p className='article-author'>
            {article.author
              ? `${intl.formatMessage({
                  id: 'author',
                  defaultMessage: 'Author',
                })}: ${article.author}`
              : 'Author: unknown'}
          </p>
        </StyledArticleModal>
      </div>
    </li>
  );
};
