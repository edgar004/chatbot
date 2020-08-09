import React from 'react'

export const ListServicios = ({title, img}) => {
    return (
        <div className="card">
            <h5 className="card-header">{title}</h5>
            <div className="card-body">
                <img src={img} className="card-img" alt={title} />
            </div>
        </div>
    )
}
