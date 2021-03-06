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

interface Patients {
    name: string;
    codeArea1: string;
    preferredPhone: string;
    codeArea2: string;
    secondaryPhone: string;
}

interface ICreate {
    name: string;
    codeArea1: string;
    preferredPhone: string;
    codeArea2: string;
    secondaryPhone: string;
}

const EditPatient: React.FC = () => {
    const formRef = useRef(null);
    const history = useHistory();

    const [patient, setPatient] = useState<Patients[]>([]);

    const url = window.location;
    var params = url.pathname.split('/');
    const replace1 = params[2].replace('%20',' ');
    const replace2 = replace1.replace('%20',' ');
    const replace3 = replace2.replace('%20',' ');
    const name = replace3.replace('%20',' ');

/* *************************[LOADING PATIENT]******************************** */
useEffect(() => {
    const loadPatient = async (): Promise<Patients[]> => {
        const response = await api.get(`/patients/show`, {
            params: {
                name,
            }
        });
        const patients = response.data;
        setPatient(patients);
        return patients;
    }
    loadPatient();
  }, [name]);
/* ************************************************************************** */

/* **************************[EDIT PATIENT]********************************** */
async function handleEdit(data: ICreate | undefined): Promise<void> {

    const oldName = name;
    
    if (!data) {throw new Error('Error.')};

    const response = await api.patch('/patients/edit', {
        oldName,
        name: data.name,
        codeArea1: data.codeArea1,
        preferredPhone: data.preferredPhone,
        codeArea2: data.codeArea2,
        secondaryPhone: data.secondaryPhone,
    });
    const newPatient = response.data;
    history.push(`/patients`);
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
                <Title><h1>Estes são os dados atuais de {name}:</h1></Title>
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
                    <tbody
                        key={patient[0]?.name}>
                        <tr>
                            <td>{patient[0]?.name}</td>
                            <td>{patient[0]?.codeArea1}</td>
                            <td>{patient[0]?.preferredPhone}</td>
                            <td>{patient[0]?.codeArea2}</td>
                            <td>{patient[0]?.secondaryPhone}</td>
                        </tr>
                    </tbody>
                </table>
            </TableContainer>
            <FormContainer>
                <Form ref={formRef} onSubmit={handleEdit}>
                    <Title><h2>Edite esses dados:</h2></Title>
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
            </FormContainer>
            <Container>
                <footer>
                </footer>
            </Container> 
        </>
    );
};

export default EditPatient;
