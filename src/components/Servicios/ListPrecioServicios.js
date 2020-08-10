import React from 'react'

export const ListPrecioServicios = ({title, img, precio}) => {
    return (
        <div className="card">
            <h5 className="card-header">{title}</h5>
            <h6 className="card-header">Precio: {precio}</h6>
            <div className="card-body">
                <img src={img} className="card-img" alt={title} />
            </div>
        </div>
    )
}
