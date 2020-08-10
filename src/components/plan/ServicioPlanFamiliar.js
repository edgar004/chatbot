import React from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListFamiliares } from "./ListFamiliares";

// Servicios que ofrese un planes familiares
const ServiciosPlanFamiliar = ({steps: {usuario: {value}} }) => {

  const url = `http://localhost:4000/api/plan/servicio/familiar`;
  const { loading, data }  = useFetch(url);

  return (
    <>
      {
        loading ? <h3>Loading...</h3> : (
          <ul className="list-group list-group-flush">
            <li key="servicios" className="list-group-item"><h3>Planes Familiares</h3>
            </li> 
            
          {data.data.map(servicios => {
                return ( 
                <div key={servicios.id} className="card mb-3">
                    <h4  className="card-header">{servicios.descripcion}</h4>
                    {servicios.plan_servicios.map(servicio => {
                        const {id, servicio:{descripcion}} = servicio;
                        return (
                            <li key={id} className="list-group-item"><ListFamiliares title={descripcion} /></li> 
                        )
                    })}
                </div>
                )
          })}
          </ul>
        )
      }
    </>
  );
};

export default ServiciosPlanFamiliar;
