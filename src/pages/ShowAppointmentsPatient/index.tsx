import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Logo from '../../assets/carefyLogo5.png';

import { Container, TableContainer, Title } from './styles';

interface Appointments {
    id: string;
    physician: string;
    patient: string;
    day: string;
    month: string;
    start: string;
    end: string;
}

const ShowAppointmentPatient: React.FC = () => {

    const [foundAppointments, setFoundAppointments] = useState<Appointments[]>([]);
    
     
    const url = window.location;
    var params = url.pathname.split('/')
    const replace1 = params[2].replace('%20',' ');
    const replace2 = replace1.replace('%20',' ');
    const replace3 = replace2.replace('%20',' ');
    const name = replace3.replace('%20',' ');

    /* **********************[LIST APPOINTMENTS]***************************** */
    useEffect(() => {
      const loadAppointments = async (): Promise<void> => {
        const response = await api.get(`/patients/list`, {
            params: {
                name,
            }
        });
        const dados = response.data;
        setFoundAppointments(dados);
      }
      loadAppointments();
    }, [foundAppointments, name]);
 
    /* ********************************************************************** */

     return (
        <>
            <Container>
                <header>
                    <img src={Logo} alt="Carefy Logo" />
                    <nav>
                        <Link to={`/`}>
                        <strong>Voltar</strong>
                        </Link>
                    </nav>
                </header>
            </Container> 
            <TableContainer>
                <Title><h1>{name}</h1></Title>
                <Title><h2>Estas são suas consultas:</h2></Title>
                <table>
                    <thead>
                        <tr>
                            <th>Médico</th>
                            <th>Paciente</th>
                            <th>Mês</th>
                            <th>Dia</th>
                            <th>Início</th>
                            <th>Fim</th>
                        </tr>
                    </thead>
                    {foundAppointments.map(appointment => (
                        <tbody
                        key={appointment.id}>
                        <tr>
                            <td>{appointment.physician}</td>
                            <td>{appointment.patient}</td>
                            <td>{appointment.month}</td>
                            <td>{appointment.day}</td>
                            <td>{appointment.start}</td>
                            <td>{appointment.end}</td>
                        </tr>
                    </tbody>
                    ))}
                </table>
                <img src={Logo} alt="Carefy Logo" />
            </TableContainer>
            <Container>
                <footer>
                </footer>
            </Container> 
        </>
    );
};

export default ShowAppointmentPatient;
