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
    padding: 19px 10px;

    h2 {
      margin: 0;

      text-align: center;
      color: lightgray;

      span {
        color: #d5eb04;
      }
    }
  }
`;

export const StyledImg = styled('img')`
  width: 50px;
  height: 30px;
  object-fit: cover;
`;
