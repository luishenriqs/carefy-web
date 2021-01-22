import styled from 'styled-components';

export const Container = styled.div`
    background: #1c86ee;
    width: 100%;
    padding: 0 180px;


    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
            width: 120px;
            margin: 20px;
        }

        nav {
            a{
                color: #fff;
                text-decoration: none;
                padding: 25px;
                font-size: 18px;
                transition: opacity 0.2s;

                &:hover {
                    opacity: 0.6;
                }
            }
        }
    }
    
    footer {
        width: 100%;
        height: 80px;
        background: #1c86ee; 
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

    h2 {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        margin: 0 auto;
        color: #f5f5f5;
    }
`;

export const FormContainer = styled.div`
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


export const TableContainer = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 40px 0;

    h1, h2 {
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: 36px;
        color: #969cb3;
    }


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
