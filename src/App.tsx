import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { LayoutContainer } from './styled-components';
import { RoutesWithNotFound } from './utilities'



const Home = lazy(() => import('./pages/Home/Home'));
const Prediction = lazy(() => import('./pages/Prediction/Prediction'));
const Consulta = lazy(() => import('./pages/Consulta/Consulta'));
const HistoricalData = lazy(() => import('./pages/HistoricalData/HistoricalData'));
const Navbar = lazy(() => import('./components/Navbar/Navbar'));


function App() {
   return (

    
   <Suspense fallback={<div>Cargando...</div>}>
    <BrowserRouter>
    <Navbar/>  
     <RoutesWithNotFound>
     <Route path="/" element={<LayoutContainer><Home /></LayoutContainer>} />
      <Route path="/prediccion" element={<LayoutContainer><Prediction /></LayoutContainer>} />
      <Route path="/consulta" element={<LayoutContainer><Consulta /></LayoutContainer>} />
      <Route path="/historico" element={<LayoutContainer><HistoricalData /></LayoutContainer>} />
     </RoutesWithNotFound>
     </BrowserRouter>
   </Suspense>


   );
  }

export default App;
