import styled from 'styled-components';
import { Space } from 'antd';

export const StyledSpace = styled(Space)`
  flex-grow: 1;
  padding: 40px;

  background-color: #384d54;
  color: lightgray;

  h1 {
    color: lightgray;
    font-size: 2.65vw;
  }

  .desc-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }

  .logo {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10.7vw !important;
    height: 10.7vw;
    margin-right: auto;

    background-color: #001529;
    border-radius: 50%;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));

    color: lightgray;
    font-size: 2.65vw;
    font-family: Delicious Handrawn;
    letter-spacing: 0.07vw;

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

      font-size: 1.4vw;
    }
  }
`;
