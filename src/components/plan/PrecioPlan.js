import React from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListPlan } from "./ListPlan";
import { clasificacion } from "../../helpers/clasificacion";

const PrecioPlan = ({steps: {usuario: {value}} }) => {

  const query = clasificacion(value);
  const url = `http://localhost:4000/api/plan/${query}`;
  console.log(url)
  const { loading, data }  = useFetch(url);

  return (
    <>
      {
        loading ? <h3>Loading...</h3> : (
          <ul className="list-group list-group-flush">
            <li key="Plan" className="list-group-item"><h3>{`Precio del plan ${data.data[0].descripcion}`}</h3></li> 
              <li key={data.data.id} className="list-group-item"><ListPlan title={data.data[0].descripcion} precio={data.data[0].precio} /></li> 
          </ul>
        )
      }
    </>
  );
};

export default PrecioPlan;
