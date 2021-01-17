import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import { Form } from './styles';
import Logo from '../../assets/carefyLogo5.png';

interface Patient {
  name: string;
  areaCode1: number | string;
  preferredPhone: number | string;
  areaCode2: number | string;
  secondaryPhone: string;
}

const PatientFooter: React.FC = () => {
  const [name, setName] = useState('');
  const [areaCode1, setAreaCode1] = useState('');
  const [preferredPhone, setPreferredPhone] = useState('');
  const [areaCode2, setAreaCode2] = useState('');
  const [secondaryPhone, setSecondaryPhone] = useState('');


  async function handleAddPatient(
    event: FormEvent<HTMLFormElement>,
  ): Promise<Patient> {
    event.preventDefault();
    const response = await api.post('/patients????', {
      name,
      areaCode1,
      preferredPhone,
      areaCode2,
      secondaryPhone,
    });
    const patient = response.data;
    setName('');
    setAreaCode1('');
    setPreferredPhone('');
    setAreaCode2('');
    setSecondaryPhone('');
    return patient;
  }
  return (
    <Form onSubmit={handleAddPatient}>
      <fieldset>
        <legend>Cadastre um novo paciente.</legend>
        <input
          type="input"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nome"
        />
        <input
          id="smallInput"
          type="input"
          value={areaCode1}
          onChange={e => setAreaCode1(e.target.value)}
          placeholder="DDD"
        />
        <input
          type="input"
          value={preferredPhone}
          onChange={e => setPreferredPhone(e.target.value)}
          placeholder="Telefone Preferêncial"
        />
        <input
          id="smallInput"
          type="input"
          value={areaCode2}
          onChange={e => setAreaCode2(e.target.value)}
          placeholder="DDD"
        />
        <input
          type="input"
          value={secondaryPhone}
          onChange={e => setSecondaryPhone(e.target.value)}
          placeholder="Telefone Secundário"
        />
        <button type="submit">Enviar</button>
      </fieldset>
      <img src={Logo} alt="Carefy Logo" />
    </Form>
  );
};

export default PatientFooter;
