import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';

export interface FinancialTableInterface {}

const FinancialTable: React.FC<FinancialTableInterface> = () => {
  const pageSize = 5;
  const [rows, setRows] = useState<any[]>([]);  // Estado para almacenar las filas

 
  const columns = [
    {
      field: 'Fecha',
      headerName: 'Fecha',
      width: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
      
    },
    {
      field: 'Apertura',
      headerName: 'Apertura',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'Cierre',
      headerName: 'Cierre',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'Volumen',
      headerName: 'Volumen',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    }
  ];

  useEffect(() => {
    const datosHistoricos = localStorage.getItem('response');
    if (datosHistoricos) {
      const datosParseados = JSON.parse(datosHistoricos);
      if (datosParseados.data) {
        const rowsWithId = datosParseados.data.map((row: any, index: number) => ({
          ...row,
          id: index 
        }));
        setRows(rowsWithId); 
      }
    }
  }, []);

  return (
    <DataGrid 
      rows={rows}  // Utilizar el estado 'rows' para las filas de la tabla
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: pageSize,
          },
        },
      }}
      pageSizeOptions={[5]}
      columns={columns}
      disableColumnSelector 
      disableRowSelectionOnClick 
      autoHeight 
      getRowId={(row: any) => row.id}
      sx={{
        '& .MuiDataGrid-columnHeaders': {
          color: 'white',
          backgroundColor: '#1ed760',
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold', // Opcional: para hacer el texto del encabezado más visible
          },
        },
        '& .MuiDataGrid-columnHeader': {
          backgroundColor: '#1ed760', // Asegura que el fondo del encabezado sea verde
        },
        '& .MuiDataGrid-cell': {
          color: 'white',
        },
        '& .MuiDataGrid-footerContainer': {
          color: 'white',
        },
        '& .MuiTablePagination-root': {
          color: 'white',
        },
        '& .MuiSvgIcon-root': {
          color: 'white',
        },
        backgroundColor: 'black',
      }}
    />
  );
};

export default FinancialTable;
