import React from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListServicios } from "./ListServicios";
import {clasificacion} from '../../helpers/clasificacion';

// Servicios por su tupo
const TipoServicio = ({steps: {usuario: {value}} }) => {

  const query = clasificacion(value);
  console.log("aqui es la: ",query);
  const url = `http://localhost:4000/api/precio/${query}`;
  const { loading, data }  = useFetch(url);

  return (
    <>
      {
        loading ? <h3>Loading...</h3> : (
          <ul className="list-group list-group-flush">
            <li key="servicios" className="list-group-item"><h3>{`Precio del servicio ${query}`}</h3></li> 
          {data.data.map(v => {
              const {id, precio_vs_servicios:{precio}, descripcion, img} = v;
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

export default TipoServicio;
