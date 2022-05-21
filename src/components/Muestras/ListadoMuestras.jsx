import React, { useEffect } from "react";
import { deleteMuestra, getMuestras } from "../../selectors/muestraService";
import swal from "sweetalert";
export const ListadoMuestras = () => {
  const [muestas, SetMuestras] = React.useState([]);
  useEffect(() => {
    getMuestras()
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          SetMuestras(resp.muestras);
          localStorage.setItem("muestras", JSON.stringify(resp.muestras));
          swal(resp.msn);
        }
      })
      .catch((err) => {
        swal("Error catch", err, "error");
        console.log(err);
      });
  }, []);
  const handleClick = (_id) => {
    swal({
      title: "Eliminar",
      text: "¿Esta seguro que desea eliminar la muestra?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteMuestra(_id)
          .then((resp) => {
            console.log(resp);
            if (resp.data.ok) {
              SetMuestras(muestas.filter((muestra) => muestra._id !== _id));
              swal("Éxito!", resp.data.msn, "success");
            }
          })
          .catch((err) => {
            console.log(err);
          });
        }
    });
  };
  return (
    <div className="row">
      <div className="col-12 mb-5">
        <div className="p-relative">
          <h1>Listado de muestras</h1>
          <a
            className="btn btn-outline-success btn_create_general"
            href="/muestras/create"
          >
            Crear Muestra
          </a>
          <hr />
        </div>
      </div>
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col"># Muestra </th>
                <th scope="col">Fecha</th>
                <th scope="col">3 Am</th>
                <th scope="col">Ayunas</th>
                <th scope="col">2 horas Despues</th>
                <th scope="col">Antes de Almuerzo</th>
                <th scope="col">2 horas Despues</th>
                <th scope="col">Antes de cenar</th>
                <th scope="col">2 horas Despues</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {muestas.map((muestra, index) => (
                <tr key={muestra._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{Date(muestra.fecha)}</td>
                  <td>{muestra.tres_am}</td>
                  <td>{muestra.ayunas}</td>
                  <td>{muestra.despues_ayunas}</td>
                  <td>{muestra.antes_almuerzo}</td>
                  <td>{muestra.despues_almuerzo}</td>
                  <td>{muestra.antes_comida}</td>
                  <td>{muestra.despues_comida}</td>
                  <td>
                    <ul className="list-group list-group-horizontal">
                      <li className="list-group-item">
                        <a href={`/muestras/view/${muestra._id}`}>
                          <img src={"./assets/img/eye.png"} alt="" />
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href={`/muestras/edit/${muestra._id}`}>
                          <img src={"./assets/img/edit.png"} alt="" />
                        </a>
                      </li>
                      <li className="list-group-item">
                        <img
                          onClick={(event) => handleClick(muestra._id)}
                          src={"./assets/img/bin.png"}
                          alt=""
                        />
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
