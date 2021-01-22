import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import SmallInput from '../../components/SmallInput';
import Button from '../../components/Button';
import Logo from '../../assets/carefyLogo5.png';


import { Container, FormContainer, TableContainer, Title } from './styles';

interface Appointment {
    physician: string;
    patient: string;
    day: string;
    month: string;
    start: string;
    end: string;
}

const EditAppointment: React.FC = () => {
    const formRef = useRef(null);
    const history = useHistory();

    const [appointment, setAppointment] = useState<Appointment[]>([]);

    const url = window.location;
    var params = url.pathname.split('/');
    const id = params[2].replace('%20',' ');


/* *************************[LOADING APPOINTMENT]******************************** */
useEffect(() => {
    const loadAppointment = async (): Promise<Appointment[]> => {
        const response = await api.get(`/appointments/showbyid`, {
            params: {
                id,
            }
        });
        const appointments = response.data;
        setAppointment(appointments);
        return appointments;
    }
    loadAppointment();
  }, [id]);
/* ************************************************************************** */

/* **************************[EDIT PATIENT]********************************** */
async function handleEdit(data: Appointment | undefined): Promise<void> {
  
    if (!data) {throw new Error('Error.')};

    const response = await api.patch('/patients/edit', {
        id,
        physician: data.physician,
        patient: data.patient,
        day: data.day,
        month: data.month,
        start: data.start,
        end: data.end,
    });
    const newPatient = response.data;
    history.push(`/appointments`);
    return newPatient;
}
/* ************************************************************************** */

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
                <Title><h1>Estes são os dados atuais desta consulta:</h1></Title>
                <table>
                    <thead>
                        <tr>
                            <th>Médico</th>
                            <th>Paciente</th>
                            <th>Dia</th>
                            <th>Mês</th>
                            <th>Início</th>
                            <th>Fim</th>
                        </tr>
                    </thead>
                    <tbody
                        key={appointment[0]?.physician}>
                        <tr>
                            <td>{appointment[0]?.physician}</td>
                            <td>{appointment[0]?.patient}</td>
                            <td>{appointment[0]?.day}</td>
                            <td>{appointment[0]?.month}</td>
                            <td>{appointment[0]?.start}</td>
                            <td>{appointment[0]?.end}</td>
                        </tr>
                    </tbody>
                </table>
            </TableContainer>
            <FormContainer>
                <Form ref={formRef} onSubmit={handleEdit}>
                    <Title><h2>Edite esses dados:</h2></Title>
                    <div className="createContainer">
                    <Input name="physician" placeholder="Médico"/>
                    <Input name="patient" placeholder="Paciente" />
                    <SmallInput name="day" placeholder="Dia" />
                    <SmallInput name="month" placeholder="Mês" />
                    <SmallInput name="start" placeholder="Início" />
                    <SmallInput name="end" placeholder="Fim" />
                    <Button
                        className="greenButton"
                        type="submit"
                    >
                        Enviar
                    </Button>
                    </div>
                    <img src={Logo} alt="Carefy Logo" />
                </Form>
            </FormContainer>
            <Container>
                <footer>
                </footer>
            </Container> 
        </>
    );
};

export default EditAppointment;
