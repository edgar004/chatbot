  import React, { useContext } from "react";
import { useFetch } from "../../hooks/useFectch";
import { ListMensualidad } from "./ListMensualidad";
import { UserContext } from "../../context/UserContext";


const Mensualidad = ({steps: {usuario: {value}} }) => {
    const { user } = useContext(UserContext);

  const url = `http://localhost:4000/api/mensualidad/${user.cedula}`;
  const { loading, data }  = useFetch(url);
  return (
    <>
      {
        loading ? <h3>Loading...</h3> : (
          <ul className="list-group list-group-flush">
            <li key="Mensualidad" className="list-group-item"><h3>Mensualidad</h3></li> 
            
          {data.data.map(v => {

            const {id, total,fecha,usuario:{nombre, apellido}} = v;

            return(
              <li key={id} className="list-group-item"><ListMensualidad total={total} fecha={fecha} nombre={nombre} apellido={apellido} /></li> 
            )
          })}
          </ul>
        )
      }
    </>
  );
};

export default Mensualidad;
