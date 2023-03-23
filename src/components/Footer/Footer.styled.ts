import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer } = Layout;

export const StyledFooter = styled(Footer)`
  background-color: #001129;
  /* height: 90px; */
  color: #1677ff;
  text-align: right;

  .clock {
    font-family: 'Orbitron';
    font-size: large;
  }
`;
