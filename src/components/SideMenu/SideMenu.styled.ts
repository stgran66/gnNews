import styled from 'styled-components';
import { Layout } from 'antd';

const { Sider } = Layout;

export const StyledSider = styled(Sider)`
  position: fixed !important;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;

  overflow: auto;

  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));

  a {
    display: block;
    padding: 1.32vw 0.7vw;

    h2 {
      margin: 0;

      text-align: center;
      color: lightgray;

      font-size: 1.8vw;

      @media screen and (max-width: 480px) {
        font-size: 2.8vw;
      }

      span {
        color: #d5eb04;
      }
    }
  }

  .ant-menu-title-content {
    font-size: 1.11vw;
  }

  .ant-menu-item {
    margin-bottom: 0.5vw;
    padding: 0 1.25vw 0 1.875vw !important;
  }
`;

export const StyledImg = styled('img')`
  width: 3.47vw;
  height: 2.08vw;
  object-fit: cover;

  @media screen and (max-width: 479px) {
    width: 80%;
    height: 4vw;
  }
`;
