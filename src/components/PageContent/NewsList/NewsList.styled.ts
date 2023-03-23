import styled from 'styled-components';

export const Article = styled('div')``;

interface NewsListProps {
  view: 'grid' | 'list';
}

export const StyledList = styled.ul<NewsListProps>`
  padding: 0;
  margin: 0;
  display: ${(props) => (props.view === 'list' ? 'block' : 'flex')};
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  li {
    display: ${(props) => props.view === 'grid' && 'flex'};
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    flex-basis: calc((100% - 40px) / 3);
    border: 1px solid black;
    position: relative;
    text-align: ${(props) => (props.view === 'list' ? 'right' : 'left')};
    :nth-child(2n) {
      background-color: rgba(0, 0, 0, 0.1);
    }

    div {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      justify-content: space-between;
    }
    .article-source {
      position: absolute;
      top: 10px;
      left: 0;
      margin: 0;
      padding: 5px 10px;
      background-color: #001529;
      color: lightgray;
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
    }

    .article-title {
      margin-left: ${(props) => props.view === 'list' && '100px'};
      font-size: 16px;
      font-weight: 500;
    }

    img {
      min-height: 72px;
      align-self: flex-end;
      width: 50%;
      height: 30%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
`;
