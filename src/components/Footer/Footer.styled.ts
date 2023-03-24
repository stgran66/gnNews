import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer } = Layout;

export const StyledFooter = styled(Footer)`
  background-color: #001129;
  color: #1677ff;
  text-align: right;
  font-size: 1.4vw;

  .clock {
    font-family: 'Orbitron';
    font-size: 2vw;
  }
`;
