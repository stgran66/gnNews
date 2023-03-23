import styled from 'styled-components';
import { Layout, Button } from 'antd';

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

  background-color: #1677ff;
  color: white;

  :hover {
    background-color: transparent;
    color: #d5eb04 !important;
    border-color: #d5eb04 !important;
  }
`;
