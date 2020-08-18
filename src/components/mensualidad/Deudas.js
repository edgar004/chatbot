import React, { useContext, memo } from "react";
import { useFetch } from "../../hooks/useFectch";
import { UserContext } from "../../context/UserContext";

const Deudas = memo(() => {
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
      ) : (
        <ul className="list-group list-group-flush">
          <li key="Deudas" className="list-group-item">
            <h3>Pendientes</h3>
          </li>
          <li key="MesesPendiente" className="list-group-item">
            <div className="card">
              <h5 className="card-header">
                Cantidad de meses pendientes: {data.mesesPendiente}
              </h5>
            </div>
          </li>
        </ul>
      )}
    </>
  );
});

export default Deudas;
