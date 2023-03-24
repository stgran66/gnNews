import styled from 'styled-components';
import { Modal } from 'antd';
import { NavLink } from 'react-router-dom';

export const StyledArticleModal = styled(Modal)`
  .ant-modal-content {
    padding: 60px 30px 30px;
    background-color: #001529;
    color: lightgray;
  }

  .ant-modal-title {
    background-color: #001529;
    color: lightgray;
  }

  .article-source {
    position: absolute;
    top: 17px;
    left: 0;
    margin: 0;
    padding: 5px 10px;

    background-color: #001529;
    color: lightgray;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  .article-image {
    max-width: 200px;
  }

  .footer-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ant-modal-close-x {
    color: lightgray;
  }
`;

export const StyledLink = styled(NavLink)`
  color: #d5eb04;
`;
