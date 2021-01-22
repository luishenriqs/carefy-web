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

interface Patient {
  id: string;
  name: string;
  codeArea1: string;
  preferredPhone: string;
  codeArea2: string;
  secondaryPhone: string;
  created_at: Date;
  updated_at: Date;
}

interface IName {
    name: string;
}

interface ICreate {
    name: string;
    codeArea1: string;
    preferredPhone: string;
    codeArea2: string;
    secondaryPhone: string;
}

const PatientPage: React.FC = () => {
    const formRef = useRef(null);
    const history = useHistory();


    const [foundedPatients, setFoundedPatients] = useState<Patient[]>([]);
    const [patientsArray, setPatientsArray] = useState<Patient[]>([]);

/* *************************[INDEX PATIENTS]********************************* */
async function handleIndex(): Promise<void> {
    const response = await api.get(`/patients/index`);
    const patients = response.data;
    setPatientsArray(patients);
}
/* ************************************************************************** */

/* ***********************[SHOW PATIENT BY NAME]***************************** */
async function handleShowPatientByName({name}: IName): Promise<Patient[]> {

    const response = await api.get(`/patients/show`, {
        params: {
            name,
        }
    });
    const patients = response.data;
    setFoundedPatients(patients);
    return patients;
}
/* ************************************************************************** */

/* **************************[CREATE PATIENT]******************************** */
async function handleAddPatient(data: ICreate): Promise<Patient> {
    
    const response = await api.post('/patients', {
        name: data.name,
        codeArea1: data.codeArea1,
        preferredPhone: data.preferredPhone,
        codeArea2: data.codeArea2,
        secondaryPhone: data.secondaryPhone,
    });
    const newPatient = response.data;
    return newPatient;
}
/* ************************************************************************** */

/* ************************[LIST APPOINTMENTS]******************************* */
async function handleListAppointmentsByPatient(
    name: string | undefined): Promise<void> {
    history.push(`/showappointmentspatients/${name}`);
}
/* ************************************************************************** */


/* **************************[EDIT PATIENT]********************************** */
async function handleEdit(
    name: string | undefined): Promise<void> {
    history.push(`/patientsedit/${name}`);
}
/* ************************************************************************** */


/* **************************[DELETE PATIENT]******************************** */
  async function handleDelete(id: string): Promise<void> {
    const response = await api.delete(`/patients/delete`, {
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
                <h1>Encontre um paciente:</h1>
            </Title>
            <Container>
                <Content>
                    <Form ref={formRef} onSubmit={handleShowPatientByName}>
                        <div className="inputContainer">
                            <legend>Procure por nome</legend>
                            <Input name="name" placeholder="Nome" />
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
                                <th>Nome</th>
                                <th>DDD</th>
                                <th>Telefone Preferencial</th>
                                <th>DDD</th>
                                <th>Telefone secundário</th>
                            </tr>
                        </thead>
                        {foundedPatients.map(patient => (
                            <tbody
                            key={patient.id}>
                            <tr>
                                <td>{patient.name}</td>
                                <td>{patient.codeArea1}</td>
                                <td>{patient.preferredPhone}</td>
                                <td>{patient.codeArea2}</td>
                                <td>{patient.secondaryPhone}</td>
                            </tr>
                            <Button
                                className="blueButton"
                                type="button"
                                onClick={() => handleListAppointmentsByPatient(
                                    patient.name
                                )}
                            >
                                Agenda
                            </Button>
                            <Button
                                className="greenButton"
                                type="button"
                                onClick={() => handleEdit(patient.name)}
                            >
                                Editar
                            </Button>
                            <Button
                                className="redButton"
                                type="button"
                                onClick={() => handleDelete(patient.id)}
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
                            <h1>Lista de pacientes</h1>
                            <Button
                                className="especialButton"
                                type="button"
                                onClick={() => handleIndex()}
                            >
                                Listar Pacientes
                            </Button>
                        </Title>
                    </div>
                    <table>
                        <thead>
                          <tr>
                            <th>Nome</th>
                            <th>DDD</th>
                            <th>Telefone Preferencial</th>
                            <th>DDD</th>
                            <th>Telefone secundário</th>
                          </tr>
                        </thead>

                        {patientsArray.map(patient => (
                        <tbody
                            key={patient.id}>
                            <tr>
                                <td>{patient.name}</td>
                                <td>{patient.codeArea1}</td>
                                <td>{patient.preferredPhone}</td>
                                <td>{patient.codeArea2}</td>
                                <td>{patient.secondaryPhone}</td>
                            </tr>
                            <Button
                                className="blueButton"
                                type="button"
                                onClick={() => handleListAppointmentsByPatient(
                                    patient.name
                                )}
                            >
                                Agenda
                            </Button>
                            <Button
                                className="greenButton"
                                type="button"
                                onClick={() => handleEdit(patient.name)}
                            >
                                Editar
                            </Button>
                            <Button
                                className="redButton"
                                type="button"
                                onClick={() => handleDelete(patient.id)}
                            >
                                Deletar
                            </Button>
                        </tbody>
                        ))}
                    </table>
                </TableContainer>
            </Container>
            
            <Container>
                <Form ref={formRef} onSubmit={handleAddPatient}>
                    <Title><h1>Cadastre um novo paciente:</h1></Title>
                    <div className="createContainer">
                    <Input name="name" placeholder="Nome"/>
                    <SmallInput name="codeArea1" placeholder="DDD" />
                    <Input name="preferredPhone" placeholder="Telefone Preferencial" />
                    <SmallInput name="codeArea2" placeholder="DDD" />
                    <Input name="secondaryPhone" placeholder="Telefone Secundário" />
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

export default PatientPage;
