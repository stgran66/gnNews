import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const StyledContent = styled(Content)`
  padding: 24px 16px 24px 16px;
  overflow: initial;

  .load-more-wrapp {
    text-align: center;
    margin-top: 12px;
    height: 32px;
    line-height: 32px;
  }
`;
