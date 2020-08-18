import React from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListPlan } from "./ListPlan";

const Planes = () => {
  const url = `https://pruebachatbots.herokuapp.com/api/plan`;
  const { loading, data } = useFetch(url);

  return (
    <>
      {loading ? (
        <div className="text-center">
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      ) : data.data.length ? (
        <ul className="list-group list-group-flush">
          <li key="Planes" className="list-group-item">
            <h3>Planes</h3>
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
            <h3>No hay planes disponibles</h3>
          </li>
        </ul>
      )}
    </>
  );
};

export default Planes;
