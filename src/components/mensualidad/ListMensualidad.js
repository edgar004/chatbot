import React, {memo} from 'react'
const opciones = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

export const ListMensualidad = memo(({nombre, apellido, total, fecha}) => {
    fecha = new Date(fecha).toLocaleDateString("es-Es", opciones);
    return (
        <div className="card">
            <h5 className="card-header">Cliente: {nombre} {apellido}</h5>
            <div className="card-body">
            <h6 className="card-header">Total: {total}</h6>
            <h6 className="card-header">Fecha: {fecha}</h6>
            </div>
        </div>
    )
})
