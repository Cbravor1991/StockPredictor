import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();

  const navigate = useNavigate(); 


  const hideButtonRoutes = ['/'];


  const shouldHideButton = hideButtonRoutes.includes(location.pathname);

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#2e2e2e' }}>
        <Toolbar sx={{
          flexGrow: 1,
        }}>
          <Typography variant="h6" component="div" sx={{
            flexGrow: 1, fontFamily: 'Arial, sans-serif',  fontWeight: 'bold', // Asegúrate de que el texto esté en negrita
              textAlign: 'center',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)' 

          }}>
            ANÁLISIS DE ACCIÓN
          </Typography>
          {!shouldHideButton && (
            <Button
              variant="contained"
              onClick ={() => navigate('/')}
              sx={{
                backgroundColor: 'black',
                minHeight: '48px',
                borderRadius: '9999px',
                width: '324px',
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#17a94a',
                },
                marginLeft: 'auto',
              }}
            >
              INICIO
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
