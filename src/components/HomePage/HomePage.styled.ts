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

    @media screen and (max-width: 479px) {
      font-size: 18px;
    }
  }

  .desc-wrapper {
    width: 100%;
    display: flex;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10.7vw !important;
    height: 10.7vw;

    background-color: #001529;
    border-radius: 50%;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));

    color: lightgray;
    font-size: 2.65vw;
    font-family: Delicious Handrawn;
    letter-spacing: 0.07vw;

    @media screen and (max-width: 479px) {
      width: 100px !important;
      height: 100px;

      font-size: 30px;
    }

    @media screen and (max-width: 767px) {
      width: 150px !important;
      height: 150px;

      font-size: 40px;
    }

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

      @media screen and (max-width: 479px) {
        font-size: 14px;
      }

      @media screen and (max-width: 767px) {
        font-size: 16px;
      }
    }
  }
`;
