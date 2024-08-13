import styled from "styled-components";

export const TableContainer = styled.div`
/*Dispongo de lo hijos para moverlos como quiera*/
  display: flex; 
/* Centro la tabla */
 justify-content: center; 
  align-items: center; 

 background-color: black; 
 width: 80vw; 
 margin: 0 auto; 

  @media only screen and (max-width: 1176px) {
    width: 100vw; /* Ajusta el ancho al 100% en pantallas más pequeñas */
    padding: 12px;
  }
`;
