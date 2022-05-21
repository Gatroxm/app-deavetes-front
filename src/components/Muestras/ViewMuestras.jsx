import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getMuestraById } from "../../selectors/muestraService";
export const ViewMuestras = () => {
  const params = useParams();
  const [muestra, setMuestra] = useState({});
  useEffect(() => {
    getMuestraById(params.id).then(resp => {
      if(resp.ok){
        setMuestra(resp.muestra);
      }
    });
  }, [])
  
  return (
    <div className="row">
      <div className="col-12 mb-5">
        <div className="p-relative">
          <h1>Detalle de muestra</h1>
          <hr />
        </div>
      </div>
      <div className="col-12">
      <ul className="list-group">
        <li className="list-group-item"><strong>Fecha: </strong>{muestra.fecha}</li>
        <li className="list-group-item"><strong>3 AM: </strong>{muestra.tres_am}</li>
        <li className="list-group-item"><strong>Ayunas: </strong>{muestra.ayunas}</li>
        <li className="list-group-item"><strong>2 Horas Despues de Desayuno: </strong>{muestra.despues_ayunas}</li>
        <li className="list-group-item"><strong>Antes de Almuerzo: </strong>{muestra.antes_almuerzo}</li>
        <li className="list-group-item"><strong>2 Horas Despues de Almuerzo: </strong>{muestra.despues_almuerzo}</li>
        <li className="list-group-item"><strong>Antes de Cena: </strong>{muestra.antes_comida}</li>
        <li className="list-group-item"><strong>2 Horas Despues de Cenar: </strong>{muestra.despues_comida}</li>
      </ul>
      </div>
    </div>
  );
};
