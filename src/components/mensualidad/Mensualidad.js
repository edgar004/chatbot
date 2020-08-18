import React, { useContext } from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListMensualidad } from "./ListMensualidad";
import { UserContext } from "../../context/UserContext";

const Mensualidad = () => {
  const { user } = useContext(UserContext);

  const url = `https://pruebachatbots.herokuapp.com/api/mensualidad/${user.cedula}`;
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
          <li key="Mensualidad" className="list-group-item">
            <h3>Mensualidad</h3>
          </li>

          {data.data.map((v) => {
            const {
              id,
              total,
              fecha,
              usuario: { nombre, apellido },
            } = v;

            return (
              <li key={id} className="list-group-item">
                <ListMensualidad
                  total={total}
                  fecha={fecha}
                  nombre={nombre}
                  apellido={apellido}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3>No hay pagos disponibles</h3>
          </li>
        </ul>
      )}
    </>
  );
};

export default Mensualidad;
