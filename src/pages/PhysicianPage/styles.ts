import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;

  .createContainer {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Title = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background: #40e0d0;
    border-radius: 50px;
    width: 500px;
    margin: 20px auto;

    h1 {
        width: 100%;
        color: #f5f5f5;
        font-size: 36px;
        font-weight: normal;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    legend {
        font-size: 24px;
        color: #969cb3;
        margin-left: 15px;
    }

    Form {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 20px;

    }

    .inputContainer {
        display: flex;
        flex-direction: column;
    }
`;

export const TableContainer = styled.section`
    margin: 20px 5px 0 5px;

    thead {
        width: 800px;
        display: flex;
        height: 58px;
        margin: 5px 0;

        tr {
            width: 800px;
            padding: 0 60px;
            border-radius: 5px;
        }

        th {
            color: #969cb3;
            width: 350px;
            padding: 10px 0;
            text-align: center;
            line-height: 24px;
            font-size: 18px;
            font-weight: normal;
        }
    }

    tbody {
        width: 100%;
        display: flex;
        height: 58px;
        background: #fff;
        margin: 5px 0;

        tr {
            width: 800px;
            padding: 0 60px;
            border-radius: 5px;
        }

        td {
            color: #969cb3;
            width: 350px;
            padding: 10px 0;
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
    } 
`;
