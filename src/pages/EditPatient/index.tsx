import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import SmallInput from '../../components/SmallInput';
import Button from '../../components/Button';
import Logo from '../../assets/carefyLogo5.png';


import { Container, FormContainer, Title } from './styles';

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

    const [foundAppointments, setFoundAppointments] = useState<Patients[]>([]);
    
     
    const url = window.location;
    var params = url.pathname.split('/')  
    const name = params[2]


/* **************************[EDIT PATIENT]********************************** */
async function handleEdit(data: ICreate | undefined): Promise<void> {

    if (!data) {throw new Error('Error.')};

    const response = await api.patch('/patients/edit', {
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
            <FormContainer>
                <Form ref={formRef} onSubmit={handleEdit}>
                    <Title><h1>{name}</h1></Title>
                    <Title><h2>Edite seus dados</h2></Title>
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
