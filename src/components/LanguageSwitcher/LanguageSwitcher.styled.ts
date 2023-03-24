import styled from 'styled-components';
import { Switch } from 'antd';

export const StyledSwitcher = styled(Switch)`
  transform: scale(0.4);

  @media screen and (min-width: 480px) {
    transform: scale(0.5);
  }
  @media screen and (min-width: 768px) {
    transform: scale(0.7);
  }
  @media screen and (min-width: 1440px) {
    transform: scale(1.4);
  }
  @media screen and (min-width: 2560px) {
    transform: scale(2);
  }
`;
