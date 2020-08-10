import React from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListServicios } from "../Servicios/ListServicios";
import {clasificacion} from '../../helpers/clasificacion';

// Servicios que ofrese un plan
const ServiciosPlan = ({steps: {usuario: {value}} }) => {

  const query = clasificacion(value);
  console.log("aqui es la: ",query);
  const url = `http://localhost:4000/api/plan/${query}`;
  const { loading, data }  = useFetch(url);

  return (
    <>
      {
        loading ? <h3>Loading...</h3> : (
          <ul className="list-group list-group-flush">
            <li key="servicios" className="list-group-item"><h5>{` Plan ${query}: RD$ ${data.data[0].precio}`}</h5> <h6>{`Servicios ofrecidos: `}</h6>
            </li> 
          {data.data[0].plan_servicios.map(v => {
              const {id, servicio:{descripcion, img}} = v;
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

export default ServiciosPlan;
