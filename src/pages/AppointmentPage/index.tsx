import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Form } from '@unform/web';
import Header from '../../components/Header';
import Input from '../../components/Input';
import SmallInput from '../../components/SmallInput';
import Button from '../../components/Button';
import Logo from '../../assets/carefyLogo5.png';
import Footer from '../../components/Footer';

import { Container, TableContainer, Title, Content } from './styles';

interface Appointment {
  id: string;
  physician: string;
  patient: string;
  month: string;
  day: string;
  start: string;
  end: string;
  created_at: Date;
  updated_at: Date;
}

interface IPhysician {
    physician: string;
}

interface IPatient {
    patient: string;
}

interface ICreate {
    physician: string;
    patient: string;
    month: string;
    day: string;
    start: string;
    end: string;
  }

const AppointmentPage: React.FC = () => {
    const formRef = useRef(null);
    const history = useHistory();

    const [foundedAppointments, setFoundedAppointments] = useState<Appointment[]>([]);
    
    const [appointmentArray, setAppointmentArray] = useState<Appointment[]>([]);


/* **********************[INDEX APPOINTMENTS]******************************** */
async function handleIndex(): Promise<void> {
    const response = await api.get(`/appointments/index`);
    const appointments = response.data;
    setAppointmentArray(appointments);
}
/* ************************************************************************** */

/* *******************[SHOW APPOINTMENT BY PHYSICIAN]************************ */
async function handleShowAppointmentByPhysician({
    physician
}: IPhysician): Promise<Appointment[]> {

    const response = await api.get(`/appointments/showbyphysician`, {
        params: {
            physician,
        }
    });
    const appointments = response.data;
    setFoundedAppointments(appointments);
    return appointments;
}
/* ************************************************************************** */

/* *******************[SHOW APPOINTMENT BY PATIENT]************************** */
async function handleShowAppointmentByPatient({
    patient
}: IPatient): Promise<Appointment[]> {

    const response = await api.get(`/appointments/showbypatient`, {
        params: {
            patient,
        }
    });
    const appointments = response.data;
    setFoundedAppointments(appointments);
    return appointments;
}
/* ************************************************************************** */

/* ************************[CREATE APPOINTMENT]****************************** */
async function handleAddAppointment(data: ICreate): Promise<Appointment> {
    
    const response = await api.post('/appointments', {
        physician: data.physician,
        patient: data.patient,
        month: data.month,
        day: data.day,
        start: data.start,
        end: data.end,
    });
    const newAppointment = response.data;
    return newAppointment;
}
/* ************************************************************************** */

/* ************************[EDIT PHYSICIAN]********************************** */
async function handleEdit(
    id: string | undefined): Promise<void> {
    history.push(`/appointmentsedit/${id}`);
}
/* ************************************************************************** */

/* ***********************[DELETE APPOINTMENTS]****************************** */
async function handleDelete(id: string): Promise<void> {

    const response = await api.delete(`/appointments/delete`, {
        params: {
            id,
        }
    });
    handleIndex();
    console.log(response);
    }
/* ************************************************************************** */

    return (
        <>
            <Header size='small'/>
            <Title>
                <h1>Encontre uma consulta:</h1>
            </Title>
            <Container>
                <Content>
                    <Form ref={formRef} onSubmit={handleShowAppointmentByPhysician}>
                        <div className="inputContainer">
                            <legend>Procure por médico</legend>
                            <Input name="physician" placeholder="Médico" />
                        </div>
                        <Button
                            className="listButton"
                            type="submit"
                        >
                            Buscar
                        </Button>
                    </Form>
                    <Form ref={formRef} onSubmit={handleShowAppointmentByPatient}>
                        <div className="inputContainer">
                            <legend>Procure por paciente</legend>
                            <Input name="patient" placeholder="Paciente" />
                        </div>
                        <Button
                            className="listButton"
                            type="submit"
                        >
                            Buscar
                        </Button>
                    </Form>
                </Content>
                <TableContainer>
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
                        {foundedAppointments.map(appointment => (
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
                            <Button
                                className="greenButton"
                                type="button"
                                onClick={() => handleEdit(appointment.id)}
                            >
                                Editar
                            </Button>
                            <Button
                                className="redButton"
                                type="button"
                                onClick={() => handleDelete(appointment.id)}
                            >
                                Deletar
                            </Button>
                        </tbody>
                        ))}
                    </table>
                </TableContainer>
            </Container>

            <Container>
                <TableContainer>
                    <div id="title">
                        <Title>
                            <h1>Lista de Consultas</h1>
                            <Button
                                className="especialButton"
                                type="button"
                                onClick={() => handleIndex()}
                            >
                                Listar Consultas
                            </Button>
                        </Title>
                    </div>
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

                        {appointmentArray.map(appointments => (
                        <tbody
                            key={appointments.id}>
                            <tr>
                                <td>{appointments.physician}</td>
                                <td>{appointments.patient}</td>
                                <td>{appointments.month}</td>
                                <td>{appointments.day}</td>
                                <td>{appointments.start}</td>
                                <td>{appointments.end}</td>
                            </tr>
                            <Button
                                className="greenButton"
                                type="button"
                                onClick={() => handleEdit(appointments.id)}
                            >
                                Editar
                            </Button>
                            <Button
                                className="redButton"
                                type="button"
                                onClick={() => handleDelete(appointments.id)}
                            >
                                Deletar
                            </Button>
                        </tbody>
                        ))}
                    </table>
                </TableContainer>
            </Container>
            
            <Container>
                <Form ref={formRef} onSubmit={handleAddAppointment}>
                    <Title><h1>Cadastre uma nova consulta:</h1></Title>
                    <div className="createContainer">
                    <Input name="physician" placeholder="Médico"/>
                    <Input name="patient" placeholder="Paciente" />
                    <SmallInput name="month" placeholder="Mês" />
                    <SmallInput name="day" placeholder="Dia" />
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
            </Container>

            <Footer />
        </>
    );
};

export default AppointmentPage;
