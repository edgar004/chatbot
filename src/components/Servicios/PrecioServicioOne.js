import React from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListPrecioServicios } from "./ListPrecioServicios";
import { clasificacion } from "../../helpers/clasificacion";

const PrecioServicioOne = ({
  steps: {
    usuario: { value },
  },
}) => {
  const query = clasificacion(value);
  const url = `https://pruebachatbots.herokuapp.com/api/precio/${query}`;
  const { loading, data } = useFetch(url);
  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : data.data.length ? (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3>Servicio: {data.data[0].descripcion}</h3>
          </li>
          {data.data.map((v) => {
            const { id, descripcion, img } = v;
            return (
              <li key={id} className="list-group-item">
                <ListPrecioServicios
                  title={descripcion}
                  img={img}
                  precio={v.precio_vs_servicios[0].precio}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3>Este servicio no es un servicio que se vende individual</h3>
          </li>
        </ul>
      )}
    </>
  );
};

export default PrecioServicioOne;
