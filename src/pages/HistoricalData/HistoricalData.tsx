import React from 'react';
import {TableContainer} from '../../styled-components';
import { FinancialTable } from './components';


const HistoricalData: React.FC = () => {

return(
    <TableContainer>
    <FinancialTable /> 
   </TableContainer>
   
   )
  

  
};

export default HistoricalData;
