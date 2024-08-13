import styled from "styled-components";

export const LayoutContainer = styled.div`

display: flex;
  justify-content: center; /* Alinea horizontalmente al centro */
  align-items: center; /* Alinea verticalmente al centro */
  background-color: #333333; /* Gris oscuro */
  width: 100%;
  height: 100vh; /* Ocupa toda la altura de la pantalla */
  margin: 0; /* Elimina cualquier margen */
  padding: 0; /* Elimina cualquier padding */

  @media only screen and (max-width: 1176px) {
    padding: 12px;
  }
`;
