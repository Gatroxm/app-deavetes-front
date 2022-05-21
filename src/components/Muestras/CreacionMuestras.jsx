import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { postMuestra } from '../../selectors/muestraService';
import swal from "sweetalert";
export const CreacionMuestras = () => {
  const navigate = useNavigate();
  const [formValues, handleInputChange] = useForm({
    fecha:'',
    ayunas: 0,
    despues_ayunas: 0,
    antes_almuerzo: 0,
    despues_almuerzo: 0,
    antes_comida: 0,
    despues_comida: 0,
    tres_am: 0
  });
  const {
    fecha,
    ayunas,
    despues_ayunas,
    antes_almuerzo,
    despues_almuerzo,
    antes_comida,
    despues_comida,
    tres_am
  } = formValues;

  const handleCreate = (e) => {
    e.preventDefault();
    postMuestra(formValues).then((data) => {
      if(data.data.ok){
        swal("Éxito!", data.data.msn, "success");
        setTimeout(() => {
          
          navigate('/muestras');
        }, 1000);
      }
    });
  }
  return (
    <div className="row">
      <div className="col-12 mb-5">
        <div className="p-relative">
          <h1>Crear de muestra</h1>
          <hr />
        </div>
      </div>
      <div className="col-12">
        <form onSubmit={handleCreate}>
          <div className="form-group mb-3">
            <label htmlFor="fecha">Fecha</label>
            <input
              type="date"
              className="form-control"
              id="fecha"
              placeholder="Fecha"
              name="fecha"
              value={fecha}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="3_am">3 Am</label>
            <input
              type="number"
              className="form-control"
              id="3_am"
              placeholder="3 Am"
              name="tres_am"
              value={tres_am}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="ayunas">Ayunas</label>
            <input
              type="number"
              className="form-control"
              id="ayunas"
              placeholder="Ayunas"
              name="ayunas"
              value={ayunas}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="2_horas_despues_desayuno">2 horas Despues Desayuno</label>
            <input
              type="number"
              className="form-control"
              id="2_horas_despues_desayuno"
              placeholder="2 horas Despues Desayuno"
              name="despues_ayunas"
              value={despues_ayunas}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="antes_almuerzo">Antes de Almuerzo</label>
            <input
              type="number"
              className="form-control"
              id="antes_almuerzo"
              placeholder="Antes de Almuerzo"
              name="antes_almuerzo"
              value={antes_almuerzo}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="2_horas_despues_almuerzo">2 horas Despues Almuerzo</label>
            <input
              type="number"
              className="form-control"
              id="2_horas_despues_almuerzo"
              placeholder="2 horas Despues Almuerzo"
              name="despues_almuerzo"
              value={despues_almuerzo}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="antes_cena">Antes de cenar</label>
            <input
              type="number"
              className="form-control"
              id="antes_cena"
              placeholder="Antes de cenar"
              name="antes_comida"
              value={antes_comida}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="2_horas_deswpues_cena">2 Horas Despues Cena</label>
            <input
              type="number"
              className="form-control"
              id="2_horas_deswpues_cena"
              placeholder="2 Horas Despues Cena"
              name="despues_comida"
              value={despues_comida}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar Muestra  
          </button>
        </form>
      </div>
    </div>
  );
};
