import React from 'react';
import { FormButton } from '../../styled-components';
import { LoginForm } from '../../styled-components';
import { GroupInput } from '../../styled-components';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleConsulta = async () => {
    navigate('/consulta'); 
  };

  return (

    <LoginForm>
      <h1 style={{ textAlign: 'center', marginTop: '0px', marginBottom: '32px', fontFamily: 'sans-serif', color: 'white' }}>
        Bienvenido que desea hacer
      </h1>

      <GroupInput>
      <FormButton onClick={handleConsulta}>
        Consultar datos historicos
      </FormButton>
      </GroupInput>

      <GroupInput>
      <FormButton onClick ={() => navigate('/prediccion')}>
        Predecir precio de una acción
      </FormButton>

      </GroupInput>
    </LoginForm>


  );
};

export default Home;
