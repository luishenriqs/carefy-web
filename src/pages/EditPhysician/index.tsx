import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../assets/carefyLogo5.png';


import { Container, FormContainer, TableContainer, Title } from './styles';

interface Physician {
    name: string;
    medicalSpecialty: string;
}

const EditPhysician: React.FC = () => {
    const formRef = useRef(null);
    const history = useHistory();

    const [physician, setPhysician] = useState<Physician[]>([]);

    const url = window.location;
    var params = url.pathname.split('/');
    const replace1 = params[2].replace('%20',' ');
    const replace2 = replace1.replace('%20',' ');
    const replace3 = replace2.replace('%20',' ');
    const name = replace3.replace('%20',' ');

/* ***********************[LOADING PHYSICIAN]******************************** */
useEffect(() => {
    const loadPhysician = async (): Promise<Physician[]> => {
        const response = await api.get(`/physicians/showbyname`, {
            params: {
                name,
            }
        });
        const physician = response.data;
        setPhysician(physician);
        return physician;
    }
    loadPhysician();
  }, [name]);
/* ************************************************************************** */

/* ************************[EDIT PHYSICIAN]********************************** */
async function handleEdit(data: Physician | undefined): Promise<void> {

    const oldName = name;
    
    if (!data) {throw new Error('Error.')};

    const response = await api.patch('/physicians/edit', {
        oldName,
        name: data.name,
        medicalSpecialty: data.medicalSpecialty,
    });
    const newPhysician = response.data;
    history.push(`/physicians`);
    return newPhysician;
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
                            <th>Especialidade</th>
                        </tr>
                    </thead>
                    <tbody
                        key={physician[0]?.name}>
                        <tr>
                            <td>{physician[0]?.name}</td>
                            <td>{physician[0]?.medicalSpecialty}</td>
                          </tr>
                    </tbody>
                </table>
            </TableContainer>
            <FormContainer>
                <Form ref={formRef} onSubmit={handleEdit}>
                    <Title><h2>Edite esses dados:</h2></Title>
                    <div className="createContainer">
                    <Input name="name" placeholder="Nome"/>
                    <Input name="medicalSpecialty" placeholder="Especialidade" />
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

export default EditPhysician;
