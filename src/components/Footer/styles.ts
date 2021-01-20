import styled from 'styled-components';

export const Container = styled.form`
  /* background: #0c3662; */
  background: #1c86ee;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    justify-content: space-between;
  }

  div {
    padding: 0 60px;
    width: 500px;
  }

  h1 {
    margin: 10px 0 15px 0;
    color: #f5f5f5;
  }

  p {
    color: #f5f5f5;
  }


  img {
    width: 120px;
    display: block;
    align-items: center;
    margin: 20px auto 10px auto;
  }
`;
