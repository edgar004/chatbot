import React from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListPrecioServicios } from "./ListPrecioServicios";

const PrecioServicio = () => {
  const url = `https://pruebachatbots.herokuapp.com/api/precio`;
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
            <h3>Precio por servicio</h3>
          </li>
          {data.data.map((v) => {
            const {
              id,
              precio,
              servicio: { descripcion, img },
            } = v;
            return (
              <li key={id} className="list-group-item">
                <ListPrecioServicios
                  title={descripcion}
                  img={img}
                  precio={precio}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3>No hay servicios disponibles</h3>
          </li>
        </ul>
      )}
    </>
  );
};

export default PrecioServicio;
