import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import PatientFooter from '../../components/PatientFooter';

import { Container, TableContainer } from './styles';

interface Patient {
  id: string;
  name: string;
  preferredPhone: string;
  secondaryPhone: string;
  created_at: Date;
  updated_at: Date;
}

const PatientPage: React.FC = () => {
  const [patientsArray, setPatientsArray] = useState<Patient[]>([]);

  useEffect(() => {
    async function loadPatient(): Promise<void> {
      const response = await api.get('/patients/index');
      const patients = response.data;
      setPatientsArray(patients);
    }

    loadPatient();
  }, [patientsArray]);

  async function handleList(id: string): Promise<void> {
    const response = await api.get(`/patients/${id}`);
    console.log(response);
  }

  async function handleEdit(id: string): Promise<void> {
    const response = await api.patch(`/patients/${id}`);
    console.log(response);
  }

  async function handleDelete(id: string): Promise<void> {
    const response = await api.delete(`/patients/${id}`);
    console.log(response);
  }

  return (
    <>
      <Header size='small'/>
      <Container>
        <TableContainer>
          <div className="title">
            <h1>Lista de Pacientes</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Telefone Preferencial</th>
                <th>Telefone Secundário</th>
              </tr>
            </thead>
            {patientsArray.map(patient => (
              <tbody key={patient.id}>
                <tr>
                  <td>{patient.name}</td>
                  <td>{patient.preferredPhone}</td>
                  <td>{patient.secondaryPhone}</td>
                  <button
                    className="listButton"
                    type="button"
                    onClick={() => handleList(patient.id)}
                  >
                    Agenda
                  </button>
                  <button
                    className="editButton"
                    type="button"
                    onClick={() => handleEdit(patient.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="deleteButton"
                    type="button"
                    onClick={() => handleDelete(patient.id)}
                  >
                    Deletar
                  </button>
                </tr>
              </tbody>
            ))}
          </table>
        </TableContainer>
      </Container>
      <PatientFooter />
    </>
  );
};

export default PatientPage;
