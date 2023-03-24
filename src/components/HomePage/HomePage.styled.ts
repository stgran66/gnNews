import styled from 'styled-components';
import { Space } from 'antd';

export const StyledSpace = styled(Space)`
  flex-grow: 1;
  padding: 40px;

  background-color: #384d54;
  color: lightgray;

  h1 {
    color: lightgray;
  }
  .logo-like {
    color: #d5eb04;
  }

  .desc-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 154px;
    height: 154px;
    margin-right: auto;

    background-color: #001529;
    border-radius: 50%;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));

    color: lightgray;
    font-size: 38px;
    font-family: Delicious Handrawn;
    letter-spacing: 1px;

    .logo-light {
      color: rgb(213, 235, 4);
    }
  }
  ul {
    list-style-type: none;

    li {
      display: flex;
      gap: 20px;
      align-items: center;
      padding: 5px 0;

      font-size: 20px;
    }
  }
`;
