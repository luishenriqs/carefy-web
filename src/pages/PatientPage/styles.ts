import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const TableContainer = styled.section`
  margin-top: 50px;

  .title {
    text-align: center;

    h1 {
      color: #969cb3;
      padding: 20px 32px;
      font-size: 48px;
      font-weight: normal;
      margin-bottom: 30px;
    }
  }

  table {
    width: 100%;
    border-spacing: 0 8px;

    tr {
      padding: 0 60px;
      border-radius: 5px;
    }

    th {
      color: #969cb3;
      padding: 20px 32px;
      text-align: center;
      line-height: 24px;
      font-size: 18px;
      font-weight: normal;
    }

    td {
      color: #969cb3;
      background: #fff;
      padding: 20px 32px;
      text-align: center;
      border: 0;
      font-size: 16px;
      font-weight: normal;

      :first-child {
        border-radius: 5px 0 0 5px;
      }

      :last-child {
        border-radius: 0 5px 5px 0;
      }
    }

    .listButton {
      border: none;
      border-radius: 5px;
      width: 80px;
      padding: 20px 10px;
      margin-left: 5px;
      color: #fff;
      background: #1c86ee;
      transition: 0.5s;

      &:hover {
        color: #969cb3;
      }
    }

    .editButton {
      border: none;
      border-radius: 5px;
      width: 80px;
      padding: 20px 10px;
      margin-left: 5px;
      color: #fff;
      background: #40e0d0;
      transition: 0.5s;

      &:hover {
        color: #969cb3;
      }
    }

    .deleteButton {
    border: none;
    border-radius: 5px;
    width: 80px;
    padding: 20px 10px;
    margin-left: 5px;
    color: #fff;
    background: #ff6a6a;
    transition: 0.5s;

    &:hover {
      color: #969cb3;
    }
  }
`;
