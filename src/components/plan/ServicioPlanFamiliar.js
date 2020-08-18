import React from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListFamiliares } from "./ListFamiliares";

const ServiciosPlanFamiliar = () => {
  const url = `https://pruebachatbots.herokuapp.com/api/plan/servicio/familiar`;
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
          <li key="servicios" className="list-group-item">
            <h3>Planes Familiares</h3>
          </li>

          {data.data.map((servicios) => {
            return (
              <div key={servicios.id} className="card mb-3">
                <h4 className="card-header">{servicios.descripcion}</h4>
                {servicios.plan_servicios.map((servicio) => {
                  const {
                    id,
                    servicio: { descripcion },
                  } = servicio;
                  return (
                    <li key={id} className="list-group-item">
                      <ListFamiliares title={descripcion} />
                    </li>
                  );
                })}
              </div>
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

export default ServiciosPlanFamiliar;
