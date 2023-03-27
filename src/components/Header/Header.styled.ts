import styled from 'styled-components';
import { Layout, Button, Modal } from 'antd';

const { Header } = Layout;

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;

  background-color: #001929;
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #1677ff;
  color: white;

  font-size: 1vw;

  :hover {
    background-color: transparent;
    color: #d5eb04 !important;
    border-color: #d5eb04 !important;
  }
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 60px 30px 30px;
    background-color: #001529;
    color: lightgray;
  }

  .ant-modal-title {
    background-color: #001529;
    color: lightgray;
  }
`;
