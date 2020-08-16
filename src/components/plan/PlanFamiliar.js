import React from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListPlan } from "./ListPlan";

const PlanesFamiliares = () => {
  const url = `https://pruebachatbots.herokuapp.com/api/plan/familiar`;
  const { loading, data } = useFetch(url);

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : data.data.length ? (
        <ul className="list-group list-group-flush">
          <li key="Planes" className="list-group-item">
            <h3>Planes Familiares</h3>
          </li>
          {data.data.map((v) => {
            const { id, descripcion, precio } = v;

            return (
              <li key={id} className="list-group-item">
                <ListPlan title={descripcion} precio={precio} />
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3>No hay planes familiares disponibles</h3>
          </li>
        </ul>
      )}
    </>
  );
};

export default PlanesFamiliares;
