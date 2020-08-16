import React from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListPlan } from "./ListPlan";
import { clasificacion } from "../../helpers/clasificacion";

const PrecioPlan = ({
  steps: {
    usuario: { value },
  },
}) => {
  const query = clasificacion(value);
  const url = `https://pruebachatbots.herokuapp.com/api/plan/${query}`;
  console.log(url);
  const { loading, data } = useFetch(url);

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : data.data.length ? (
        <ul className="list-group list-group-flush">
          <li key="Plan" className="list-group-item">
            <h3>{`Precio del plan ${data.data[0].descripcion}`}</h3>
          </li>
          <li key={data.data.id} className="list-group-item">
            <ListPlan
              title={data.data[0].descripcion}
              precio={data.data[0].precio}
            />
          </li>
        </ul>
      ) : (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3>No hay planes disponibles</h3>
          </li>
        </ul>
      )}
    </>
  );
};

export default PrecioPlan;
