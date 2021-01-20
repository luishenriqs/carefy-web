import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Logo from '../../assets/carefyLogo4.png';
import Doctor from '../../assets/doctor.jpg';
import Footer from '../../components/Footer';

import { Container } from './styles';


const Dashboard: React.FC = () => {

    return (
        <>
            <Header size='small'/>
            <Container>
                <div className="mainContainer">
                    <div className="presentation">
                        <img src={Logo} alt="Carefy Logo" />
                        <h1>
                            Auditoria médica mais simples e eficiente na sua 
                            operadora de saúde
                        </h1>
                    </div>
                    <img src={Doctor} alt="Doctor Logo" />
                </div>

                <div className="buttonContainer">
                    <Link to={'/physicians'}>
                        <Button
                            className="physicianButton"
                            type="button"
                            >
                            Médicos
                        </Button>
                    </Link>
                    <Link to={'/patients'}>
                        <Button
                            className="patientButton"
                            type="button"
                            >
                            Pacientes
                        </Button>
                    </Link>
                    <Link to={'/appointments'}>
                        <Button
                            className="appointmentButton"
                            type="button"
                            >
                            Consultas
                        </Button>
                    </Link>
                </div>
            </Container>         
            <Footer />
        </>
    );
};

export default Dashboard;
