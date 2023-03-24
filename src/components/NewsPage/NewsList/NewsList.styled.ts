import styled from 'styled-components';

interface NewsListProps {
  view: 'grid' | 'list';
}

export const StyledList = styled.ul<NewsListProps>`
  display: ${(props) => (props.view === 'list' ? 'block' : 'flex')};
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 0;
  margin: 0;

  list-style: none;

  li {
    position: relative;
    display: ${(props) => props.view === 'grid' && 'flex'};
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    flex-basis: calc((100% - 40px) / 3);

    border: 1px solid #001529;
    border-radius: 10px;
    text-align: ${(props) => (props.view === 'list' ? 'right' : 'left')};

    transition: box-shadow 0.3s;

    @media screen and (max-width: 767px) {
      flex-basis: calc((100% - 30px) / 2);
    }

    @media screen and (max-width: 480px) {
      flex-basis: calc((100% - 20px));
    }

    :hover {
      box-shadow: 0 0 11px rgba(222, 222, 222, 0.2);
    }

    :nth-child(2n) {
      background-color: rgba(0, 0, 0, 0.1);
    }

    :not(:last-child) {
      margin-bottom: ${(props) => props.view === 'list' && '10px'};
      cursor: pointer;
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
      align-self: flex-end;
      width: 50%;
      height: 73px;
      object-fit: cover;

      border-radius: 10px;
    }
  }
`;
