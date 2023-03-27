import styled from 'styled-components';
import { Layout } from 'antd';
import { Button } from 'antd';

const { Content } = Layout;

export const StyledContent = styled(Content)`
  padding: 24px 16px 24px 16px;
  overflow: initial;
  text-align: center;

  background-color: #384d54;
  color: lightgray;

  h2 {
    text-align: center;
  }

  .load-more-wrapp {
    text-align: center;
    margin-top: 12px;
    height: 32px;
    line-height: 32px;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #1677ff;
  color: white;

  :hover {
    background-color: transparent;
    color: #d5eb04 !important;
    border-color: #d5eb04 !important;
  }
`;
