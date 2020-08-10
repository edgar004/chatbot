import React from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListPlan } from "./ListPlan";

const PlanesFamiliares = ({steps: {usuario: {value}} }) => {

  const url = `http://localhost:4000/api/plan/familiar`;
  const { loading, data }  = useFetch(url);

  return (
    <>
      {
        loading ? <h3>Loading...</h3> : (
          <ul className="list-group list-group-flush">
            <li key="Planes" className="list-group-item"><h3>Planes Familiares</h3></li> 
          {data.data.map(v => {
              const {id, descripcion, precio} = v;

            return(
              <li key={id} className="list-group-item"><ListPlan title={descripcion} precio={precio} /></li> 
            )
          })}
          </ul>
        )
      }
    </>
  );
};

export default PlanesFamiliares;
