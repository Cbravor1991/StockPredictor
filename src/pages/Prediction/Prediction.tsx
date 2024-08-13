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
import swal from 'sweetalert2'
import '../css/swal.css'

const Prediction: React.FC = () => {
  const [nameStock, setNameStock] = useState<string>('');
  const [datePrediction, setDatePrediction] = useState<string>('');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  };

  const handlePrediction = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    
    const data = {
      stockName: nameStock,
      predictionDate: datePrediction
    };
  
  

    swal.fire({
      title: "Calculando la predicción...",
      text: "Por favor espera un momento",
      allowOutsideClick: false,
      didOpen: () => {
        swal.showLoading();
      }
    });
  
    try {
      const response = await axios.post('/predict', data); 
      const datos = response.data.prediction;
      console.log(datos);
      const yhat = datos.yhat.toFixed(2);
  
      swal.fire({
        title: `US$ ${yhat}`,
        text: `Es el valor estimado para el ${formatDate(datePrediction)}`,
        icon: "success",
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'swal-button-green', // Clase personalizada para el botón
        }
      });
  
      console.log("Respuesta del servidor:", yhat);
  
    } catch (error) {
      console.error("Error al realizar la predicción:", error);

      swal.fire({
        title: "Error",
        text: "Hubo un problema al realizar la predicción.",
        icon: "error",
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'swal-button-red', // Clase personalizada para el botón
        }
      });
    }
  };

  return (
    <LoginForm>
      <h1 style={{ textAlign: 'center', marginTop: '0px', marginBottom: '32px', fontFamily: 'sans-serif', color: 'white' }}>
        Predicción de precio
      </h1>
      <GroupInput>
        <LabelGroup>
          <span style={{ color: 'white', width: '100%', height: '19.2px', textAlign: 'left', fontSize: '0.875rem', fontWeight: 700, fontFamily: 'CircularSp, sans-serif' }}>Nombre de la acción</span>
        </LabelGroup>
        <Input
          style={{ height: '48px' }}
          type="text"
          placeholder="Nombre de la acción"
          value={nameStock}
          onChange={(e) => setNameStock(e.target.value)} // Actualiza el estado cuando cambia el valor
        />
      </GroupInput>
      <GroupInput>
        <LabelGroup>
          <span style={{ color: 'white', width: '100%', height: '19.2px', textAlign: 'left', fontSize: '0.875rem', fontWeight: 700, fontFamily: 'CircularSp, sans-serif' }}>Fecha de consulta de precio</span>
        </LabelGroup>
        <Input
          style={{ height: '48px' }}
          type="date" 
          placeholder="Fecha de consulta"
          value={datePrediction}
          onChange={(e) => setDatePrediction(e.target.value)} 
        />
      </GroupInput>
      <FormButton onClick={handlePrediction}>
        Predecir
      </FormButton>
    </LoginForm>
  );
};

export default Prediction;
