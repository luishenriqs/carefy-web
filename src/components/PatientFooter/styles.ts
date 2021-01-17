import styled from 'styled-components';

export const Form = styled.form`
  /* background: #0c3662; */
  background: #1c86ee;
  width: 100%;
  padding: 30px 0;

  legend {
    font-size: 32px;
    color: #fff;
    margin: 0 auto;
  }

  fieldset {
    width: 1120px;
    padding: 30px 95px;
    border: none;
    margin: 0 auto;
  }

  input {
    padding: 20px 10px;
    align-items: center;
    border-radius: 5px;
    border: none;

    & + input {
      margin-left: 5px;
    }
  }

  #smallInput {
    width: 60px;
    padding: 20px 10px;
    align-items: center;
    border-radius: 5px;
    border: none;
    margin-left: 20px;
  }

  button {
    width: 80px;
    padding: 20px 10px;
    margin-left: 20px;
    border-radius: 5px;
    background: #ff6a6a;
    color: #fff;
    border: none;
    font-weight: normal;
    transition: 0.5s;

    &:hover {
      color: #ff6a6a;
      background: #fff;
      border: solid 1px #ff6a6a;
    }
  }

  img {
    width: 120px;
    display: block;
    align-items: center;
    margin: 20px auto 10px auto;
  }
`;
