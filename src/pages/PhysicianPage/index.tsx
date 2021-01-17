import React, { useState, FormEvent, useRef } from 'react';
import api from '../../services/api';
import { Form } from '@unform/web';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import PatientFooter from '../../components/PatientFooter';

import { Container, TableContainer, Title, Content } from './styles';

interface Physician {
  id: string;
  name: string;
  medicalSpecialty: string;
  created_at: Date;
  updated_at: Date;
}

const PhysicianPage: React.FC = () => {
    const formRef = useRef(null);


    const [physicianArray, setPhysicianArray] = useState<Physician[]>([]);

    const [foundedPhysician, setFoundedPhysician] = useState<Physician[]>([]);


    const [name, setName] = useState('');
    const [medicalSpecialty, setMedicalSpecialty] = useState('');

 

  console.log('linha24:', name);

/* **[USE EFFECT - CARREGA OS DADOS DE FORMA AUTOMÁTICA JUNTO COM A PÁGINA]** */
//   useEffect(() => {
//     async function loadPhysician(): Promise<void> {
//       const response = await api.get('/physicians/index');
//       const physicians = response.data;
//       setPhysicianArray(physicians);
//     }
//     loadPhysician();
//   }, [physicianArray]);
/* ************************************************************************** */

/* ************************[INDEX PHYSICIAN]********************************* */
  async function handleIndex(): Promise<void> {
    const response = await api.get(`/physicians/index`);
    const physicians = response.data;
    setPhysicianArray(physicians);
  }
/* ************************************************************************** */

/* **********************[SHOW PHYSICIAN BY NAME]**************************** */
function handleShowPhysicianByName(data: object): void {

    console.log(data)

    // const response = await api.get(`/physicians/show`, {
    //     name,
    // });
    // const physician = response.data;
    // console.log(physician)
    // setFoundedPhysician(physician);
    // setName('');
  }
/* ************************************************************************** */

/* *******************[SHOW PHYSICIAN BY SPECIALTY]************************** */
// ????????????????????????????

async function handleShowPhysicianByMedicalSpecialty(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    // event.preventDefault();
    // const response = await api.get('/physicians/show?????', {
    //     medicalSpecialty,
    // });
    // const physician = response.data;
    // setFoundedPhysician(physician);
    // setMedicalSpecialty('');
  }
/* ************************************************************************** */



  async function handleList(id: string): Promise<void> {
    const response = await api.get(`/physicians/${id}`);
    console.log(response);
  }

  async function handleEdit(id: string): Promise<void> {
    const response = await api.patch(`/physicians/${id}`);
    console.log(response);
  }

  async function handleDelete(id: string): Promise<void> {
    const response = await api.delete(`/physicians/${id}`);
    console.log(response);
  }

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
                            type="button"
                        >
                            Buscar
                        </Button>
                    </Form>
                    <Form ref={formRef} onSubmit={handleShowPhysicianByName}>
                        <div className="inputContainer">
                            <legend>Procure por especialidade</legend>
                            <Input name="medicalSpecialty" placeholder="Especialidade" />
                        </div>
                        <Button
                            className="listButton"
                            type="button"
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

                        {foundedPhysician.map(physician => (
                        <tbody
                            key={physician.id}>
                            <tr>
                                <td>{physician.name}</td>
                                <td>{physician.medicalSpecialty}</td>
                            </tr>
                            <Button
                                className="appointmentButton"
                                type="button"
                                onClick={() => handleList(physician.id)}
                            >
                                Agenda
                            </Button>
                            <Button
                                className="updateButton"
                                type="button"
                                onClick={() => handleEdit(physician.id)}
                            >
                                Editar
                            </Button>
                            <Button
                                className="deleteButton"
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
                        <h1>Lista de Médicos</h1>
                        <Button
                            className="listButton"
                            type="button"
                            onClick={() => handleIndex()}
                        >
                            Listar Médicos
                        </Button>
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
                                className="appointmentButton"
                                type="button"
                                onClick={() => handleList(physician.id)}
                            >
                                Agenda
                            </Button>
                            <Button
                                className="updateButton"
                                type="button"
                                onClick={() => handleEdit(physician.id)}
                            >
                                Editar
                            </Button>
                            <Button
                                className="deleteButton"
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
            <PatientFooter />
        </>
    );
};

export default PhysicianPage;
