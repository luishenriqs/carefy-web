import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/carefyLogo5.png';

const Footer: React.FC = () => {

  return (
    <Container>
      <section>
        <div>
          <h1>Sobre nós</h1>
          <p>
            Situada no Parque Tecnológico de Ribeirão Preto da USP, somos uma 
            empresa que visa transformar a saúde através do uso da tecnologia 
            e inovação.
          </p>
          <p>Made with Care For You.</p>
        </div>

        <div>
          <h1>Contato</h1>
          <p>Av. Dra. Nadir Aguiar, 1805 - Rib. Preto/SP</p>
          <p>Alameda Vicente Pinzon, 54 - São Paulo/SP</p>
          <p>contato@carefy.com.br</p>
          <p>+55 (16) 98165 6463</p>
        </div>
      </section>

      <img src={Logo} alt="Carefy Logo" />
    </Container>
    
  );
};

export default Footer;




