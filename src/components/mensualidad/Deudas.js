import React, { useContext } from "react";
import { useFetch } from "../../hooks/useFectch";
import { UserContext } from "../../context/UserContext";

const Deudas = () => {
  const { user } = useContext(UserContext);

  const url = `http://localhost:4000/api/mensualidad/${user.cedula}`;
  const { loading, data } = useFetch(url);
  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ul className="list-group list-group-flush">
          <li key="Deudas" className="list-group-item">
            <h3>Pendientes</h3>
          </li>
          <li key="MesesPendiente" className="list-group-item">
            <div className="card">
              <h5 className="card-header">
                Cantidad de meses pendientes: {data.mesesPendiente}{" "}
              </h5>
            </div>
          </li>
        </ul>
      )}
    </>
  );
};

export default Deudas;
