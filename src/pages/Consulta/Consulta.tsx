import React, { useState } from 'react';
import { FormButton } from '../../styled-components';
import { LoginForm } from '../../styled-components';
import { GroupInput } from '../../styled-components';
import { LabelGroup } from '../../styled-components';
import { Input } from '../../styled-components';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2'
import '../css/swal.css'



const Home: React.FC = () => {
  const [nameStock, setNameStock] = useState<string>('');  
  const navigate = useNavigate(); 
  const handleDatosHistoricos = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const data = {
      stockName: nameStock
    };
  
  
    swal.fire({
      title: "Cargando datos históricos...",
      text: "Por favor, espera un momento",
      allowOutsideClick: false,
      didOpen: () => {
        swal.showLoading();
      }
    });
  
    try {
      const response = await axios.post('/historicalData', data); 
      console.log("objeto",response);
      console.log("data", response.data);
      console.log("data data", response.data.data);
      const responseData = response.data.data;
   

    
      if (Array.isArray(responseData) && responseData.length > 0) {
        localStorage.setItem('response', JSON.stringify(response.data));
        swal.close(); // Cierra la alerta de carga
        navigate('/historico'); // Redirigir a la ruta después de obtener la respuesta
      } else {
        // Mostrar mensaje de error si la respuesta está vacía
        swal.fire({
          title: "El nombre de la acción no existe",
          text: "Por favor ingrese un nombre valido!",
          icon: "warning",
          confirmButtonText: 'Intentar de nuevo',
          customClass: {
            confirmButton: 'swal-button-red', // Clase personalizada para el botón
          }
        }).then((result) => {
          if (result.isConfirmed) {
            swal.close(); 
          }
        });
      }
    
    } catch (error) {
      console.error("Error al obtener los datos históricos:", error);

      // Mostrar mensaje de error
      swal.fire({
        title: "Error",
        text: "Hubo un problema al obtener los datos históricos.",
        icon: "error",
        confirmButtonText: 'Entendido',
        customClass: {
          confirmButton: 'swal-button-red', // Clase personalizada para el botón
        }
      });
    }
  };

 


  return (

    <LoginForm>
    <h1 style={{ textAlign: 'center', marginTop: '0px', marginBottom: '32px', fontFamily: 'sans-serif', color: 'white' }}>
      Realize su consulta
    </h1>
    <GroupInput>
      <LabelGroup>
        <span style={{ color: 'white', width: '100%', height: '19.2px', textAlign: 'left', fontSize: '0.875rem', fontWeight: 700, fontFamily: 'CircularSp, sans-serif' }}>Ingrese nombre de la acción</span>
      </LabelGroup>
      <Input
          style={{ height: '48px' }}
          type="text"
          placeholder="Nombre de la acción"
          value={nameStock}
          onChange={(e) => setNameStock(e.target.value)} // Actualiza el estado cuando cambia el valor
        />
      


    </GroupInput>
    <FormButton onClick={handleDatosHistoricos}>
    Consultar
  </FormButton>
  </LoginForm>

  );
};

export default Home;
