import React from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListPrecioServicios } from "./ListPrecioServicios";

const PrecioServicio = ({steps: {usuario: {value}} }) => {

  const url = `http://localhost:4000/api/precio`;
  const { loading, data }  = useFetch(url);

  return (
    <>
      {
        loading ? <h3>Loading...</h3> : (
          <ul className="list-group list-group-flush">
            <li key="servicios" className="list-group-item"><h3>Precio por servicio</h3></li> 
          {data.data.map(v => {
              const {id, precio, servicio:{descripcion, img}} = v;
            return(
              <li key={id} className="list-group-item"><ListPrecioServicios title={descripcion} img={img} precio={precio} /></li> 
            )
          })}
          </ul>
        )
      }
    </>
  );
};

export default PrecioServicio;
