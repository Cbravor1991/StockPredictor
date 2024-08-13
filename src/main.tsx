import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

//Probando axios
import { AxiosInterceptor } from './interceptors/axios.interceptors.ts'

AxiosInterceptor();

ReactDOM.createRoot(document.getElementById('root')!).render(

    <App />
 
)
