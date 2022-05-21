import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CreacionMuestras } from '../components/Muestras/CreacionMuestras';
import { EdicionMuestras } from '../components/Muestras/EdicionMuestras';
import { ListadoMuestras } from '../components/Muestras/ListadoMuestras';
import { ViewMuestras } from '../components/Muestras/ViewMuestras';

export const AppRouter = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/muestras" element={<ListadoMuestras/>} />
                <Route path="/*" element={<ListadoMuestras/>} />
                <Route path="/muestras/edit/:id" element={<EdicionMuestras/>} />
                <Route path="/muestras/view/:id" element={<ViewMuestras/>} />
                <Route path="/muestras/create" element={<CreacionMuestras/>} />
            </Routes>
        </BrowserRouter>
  )
}
