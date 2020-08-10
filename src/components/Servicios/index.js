import React from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListServicios } from "./ListServicios";

const Servicios = ({steps: {usuario: {value}} }) => {

  // const url = `http://localhost:4000/api/${clasificacion(value)}`;
  const url = `http://localhost:4000/api/servicio`;
  const { loading, data }  = useFetch(url);

  return (
    <>
      {
        loading ? <h3>Loading...</h3> : (
          <ul className="list-group list-group-flush">
            <li key="servicios" className="list-group-item"><h3>Servicios</h3></li> 
          {data.data[0].tipo_vs_servicios.map(v => {

            const {servicio:{id,descripcion,img}} = v;

            return(
              <li key={id} className="list-group-item"><ListServicios title={descripcion} img={img} /></li> 
            )
          })}
          </ul>
        )
      }
    </>
  );
};

export default Servicios;
