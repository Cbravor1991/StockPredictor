import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Typography, Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { FormButton } from '../../styled-components';
import { LoginForm } from '../../styled-components';
import { GroupInput } from '../../styled-components';
import { LabelGroup } from '../../styled-components';
import { Input } from '../../styled-components';
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    try {
      const response = await axios.get('/users'); // Llamada a /users
      
      console.log(response.data);
      
      if (response.data.length == 0) {
        console.log("No hay usuarios");
      }

      window.localStorage.setItem("cache_view", JSON.stringify(response.data));
      // Redirigir o manejar la respuesta como prefieras
    } catch (error) {
      console.error(error);
    }
  };

  return (

      <LoginForm>
        <h1 style={{ textAlign: 'center', marginTop: '0px', marginBottom: '32px', fontFamily: 'sans-serif', color: 'white' }}>
          Inicia sesión en TicketApp
        </h1>
        <GroupInput>
          <LabelGroup>
            <span style={{ color: 'white', width: '100%', height: '19.2px', textAlign: 'left', fontSize: '0.875rem', fontWeight: 700, fontFamily: 'CircularSp, sans-serif' }}>Correo electrónico o nombre de usuario</span>
          </LabelGroup>
          <Input style={{ height: '48px' }} type="text" placeholder="Correo electrónico o nombre de usuario"></Input>


        </GroupInput>
        <GroupInput>
          <LabelGroup>
            <span style={{ color: 'white', width: '100%', height: '19.2px', textAlign: 'left', fontSize: '0.875rem', fontWeight: 700, fontFamily: 'CircularSp, sans-serif' }}>Contraseña</span>
          </LabelGroup>
          <Input style={{ height: '48px' }} type="text" placeholder="Contraseña"></Input>

        </GroupInput>
        <FormButton onClick={handleLogin}>
        Iniciar sesión
      </FormButton>
      </LoginForm>


  );
};

export default Login;
