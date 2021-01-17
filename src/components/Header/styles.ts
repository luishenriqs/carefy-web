import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  /* background: #104e8b; */
  background: #1c86ee;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 120px;
      margin: 20px;
    }

    nav {
      a {
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
`;
