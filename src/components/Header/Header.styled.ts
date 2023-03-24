import styled from 'styled-components';
import { Layout, Button } from 'antd';

const { Header } = Layout;

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: flex-end;
  gap: 1.56vw;
  align-items: center;

  background-color: #001929;

  @media screen and (max-width: 767px) {
    height: 48px;
  }

  @media screen and (max-width: 480px) {
    height: 32px;
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.78vw;
  height: 2.23vw;

  background-color: #1677ff;
  color: white;

  font-size: 1vw;

  @media screen and (max-width: 767px) {
    height: 24px;
  }

  @media screen and (max-width: 480px) {
    height: 16px;
  }

  :hover {
    background-color: transparent;
    color: #d5eb04 !important;
    border-color: #d5eb04 !important;
  }
`;
