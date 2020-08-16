import React from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListServicios } from "./ListServicios";
import { clasificacion } from "../../helpers/clasificacion";

const TipoServicio = ({
  steps: {
    usuario: { value },
  },
}) => {
  const query = clasificacion(value);
  const url = `https://pruebachatbots.herokuapp.com/api/servicio/${query}`;
  const { loading, data } = useFetch(url);

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : data.data.length ? (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3>{`Servicios ${query}`}</h3>
          </li>
          {data.data[0].tipo_vs_servicios.map((v) => {
            const {
              id,
              servicio: { descripcion, img },
            } = v;
            return (
              <li key={id} className="list-group-item">
                <ListServicios title={descripcion} img={img} />
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3>Este no es un tipo de servicio disponible</h3>
          </li>
        </ul>
      )}
    </>
  );
};

export default TipoServicio;
