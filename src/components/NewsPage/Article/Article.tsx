import { useState } from 'react';

import { Article, View } from 'state';
import { StyledArticleModal, StyledLink } from './Article.styled';

interface NewsArticleProps {
  article: Article;
  view: View;
}

export const NewsArticle: React.FC<NewsArticleProps> = ({ article, view }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal: React.MouseEventHandler = (event) => {
    event.stopPropagation();
    setIsModalOpen(false);
  };

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
        <p className='article-date'>{article.publishedAt}</p>
        <StyledArticleModal
          title={article.title}
          open={isModalOpen}
          onCancel={hideModal}
          closable
          footer={
            <div className='footer-wrapper' style={{}}>
              <StyledLink to={article.url!} target='_blank'>
                Go to source
              </StyledLink>
              <p className='article-date'>{article.publishedAt}</p>
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
            {article.author ? `Author: ${article.author}` : 'Author: unknown'}
          </p>
        </StyledArticleModal>
      </div>
    </li>
  );
};
