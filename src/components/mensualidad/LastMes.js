import React, { useContext } from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListMensualidad } from "./ListMensualidad";
import { UserContext } from "../../context/UserContext";

const LastMes = () => {
  const { user } = useContext(UserContext);

  const url = `https://pruebachatbots.herokuapp.com/api/mensualidad/ultimo/${user.cedula}`;
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
      ) : data.data ? (
        <ul className="list-group list-group-flush">
          <li key="LastMes" className="list-group-item">
            <h3>Ultimo mes Pagado</h3>
          </li>
          {(() => {
            const {
              id,
              total,
              fecha,
              usuario: { nombre, apellido },
            } = data.data;
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
          })()}
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

export default LastMes;
