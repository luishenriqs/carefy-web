import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Form } from '@unform/web';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../assets/carefyLogo5.png';
import Footer from '../../components/Footer';

import { Container, TableContainer, Title, Content } from './styles';

interface Physician {
  id: string;
  name: string;
  medicalSpecialty: string;
  created_at: Date;
  updated_at: Date;
}

interface IName {
    name: string;
}

interface ISpecialty {
    medicalSpecialty: string;
}

interface ICreate {
    name: string;
    medicalSpecialty: string;
  }

const PhysicianPage: React.FC = () => {
    const formRef = useRef(null);
    const history = useHistory();


    const [foundPhysician, setFoundPhysician] = useState<Physician[]>([]);
    const [physicianArray, setPhysicianArray] = useState<Physician[]>([]);


/* ************************[INDEX PHYSICIAN]********************************* */
async function handleIndex(): Promise<void> {
    const response = await api.get(`/physicians/index`);
    const physicians = response.data;
    setPhysicianArray(physicians);
    setFoundPhysician([]);
}
/* ************************************************************************** */

/* **********************[SHOW PHYSICIAN BY NAME]**************************** */
async function handleShowPhysicianByName({name}: IName): Promise<Physician[]> {

      const response = await api.get(`/physicians/showbyname`, {
        params: {
            name,
        }
    });
    const physician = response.data;
    setFoundPhysician(physician);
    setPhysicianArray([]);
    return physician;
}
/* ************************************************************************** */

/* *******************[SHOW PHYSICIAN BY SPECIALTY]************************** */
async function handleShowPhysicianBySpecialty({
    medicalSpecialty
}: ISpecialty): Promise<Physician[]> {

    const response = await api.get(`/physicians/showbyspecialty`, {
        params: {
            medicalSpecialty,
      }
    });
    const physician = response.data;
    setFoundPhysician(physician);
    setPhysicianArray([]);
    return physician;
}
/* ************************************************************************** */

/* *************************[CREATE PHYSICIAN]******************************* */
async function handleAddPhysician(data: ICreate): Promise<Physician> {
    
    const response = await api.post('/physicians', {
        name: data.name,
        medicalSpecialty: data.medicalSpecialty,   
    });

    const newPhysician = response.data;
    handleIndex();
    return newPhysician;
}
/* ************************************************************************** */

/* ************************[LIST APPOINTMENTS]******************************* */
async function handleListAppointmentsByPhysician(
    name: string | undefined): Promise<void> {
    history.push(`/showappointmentsphysicians/${name}`);
}
/* ************************************************************************** */

/* ************************[EDIT PHYSICIAN]********************************** */
async function handleEdit(
    name: string | undefined): Promise<void> {
    history.push(`/physiciansedit/${name}`);
}
/* ************************************************************************** */

/* *************************[DELETE PHYSICIAN]******************************* */
async function handleDelete(id: string): Promise<void> {

const response = await api.delete(`/physicians/delete`, {
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
                <h1>Encontre o seu médico:</h1>
            </Title>
            <Container>
                <Content>
                    <Form ref={formRef} onSubmit={handleShowPhysicianByName}>
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
                    <Form ref={formRef} onSubmit={handleShowPhysicianBySpecialty}>
                        <div className="inputContainer">
                            <legend>Procure por especialidade</legend>
                            <Input name="medicalSpecialty" placeholder="Especialidade" />
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
                                <th>Especialidade Médica</th>
                            </tr>
                        </thead>
                        {foundPhysician.map(physician => (
                            <tbody
                            key={physician.id}>
                            <tr>
                                <td>{physician.name}</td>
                                <td>{physician.medicalSpecialty}</td>
                            </tr>
                            <Button
                                className="blueButton"
                                type="button"
                                onClick={() => handleListAppointmentsByPhysician(
                                    physician.name
                                )}
                            >
                                Agenda
                            </Button>
                            <Button
                                className="greenButton"
                                type="button"
                                onClick={() => handleEdit(physician.name)}
                            >
                                Editar
                            </Button>
                            <Button
                                className="redButton"
                                type="button"
                                onClick={() => handleDelete(physician.id)}
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
                            <h1>Lista de Médicos</h1>
                            <Button
                                className="especialButton"
                                type="button"
                                onClick={() => handleIndex()}
                            >
                                Listar Médicos
                            </Button>
                        </Title>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Especialidade Médica</th>
                            </tr>
                        </thead>

                        {physicianArray.map(physician => (
                        <tbody
                            key={physician.id}>
                            <tr>
                                <td>{physician.name}</td>
                                <td>{physician.medicalSpecialty}</td>
                            </tr>
                            <Button
                                className="blueButton"
                                type="button"
                                onClick={() => handleListAppointmentsByPhysician(
                                    physician.name
                                )}
                            >
                                Agenda
                            </Button>
                            <Button
                                className="greenButton"
                                type="button"
                                onClick={() => handleEdit(physician.name)}
                            >
                                Editar
                            </Button>
                            <Button
                                className="redButton"
                                type="button"
                                onClick={() => handleDelete(physician.id)}
                            >
                                Deletar
                            </Button>
                        </tbody>
                        ))}
                    </table>
                </TableContainer>
            </Container>
            
            <Container>
                <Form ref={formRef} onSubmit={handleAddPhysician}>
                    <Title><h1>Cadastre um novo médico:</h1></Title>
                    <div className="createContainer">
                    <Input name="name" placeholder="Nome"/>
                    <Input name="medicalSpecialty" placeholder="Especialidade Médica" />
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

export default PhysicianPage;
