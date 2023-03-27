import styled from 'styled-components';
import { Switch } from 'antd';

export const StyledSwitcher = styled(Switch)`
  @media screen and (min-width: 1440px) {
    transform: scale(1.4);
  }
  @media screen and (min-width: 2560px) {
    transform: scale(2);
  }
`;
