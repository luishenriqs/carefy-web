import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 50px;
  border: 2px solid #fff;
  padding: 15px 10px;
  margin: 15px;
  display: flex;
  align-items: center;
  width: 70px;


  ${props =>
    props.isFocused &&
    css`
      border-color: #1c86ee;
  `}

  ${props =>
    props.isFilled &&
    css`
      border-color: #40e0d0;
  `}

  input {
    background: transparent;
    color: #4f4f4f;
    flex: 1;
    border: none;

    &::placeholder {
      color: #969cb3;
    }
  }
`;
