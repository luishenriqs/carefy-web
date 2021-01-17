import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Logo from '../../assets/carefyLogo5.png';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="Carefy Logo" />
      <nav>
        <Link to={`/`}>
          <strong>Voltar</strong>
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
