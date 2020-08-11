import React, { memo } from 'react'

export const ListFamiliares = memo(({title}) => {
    return (
        <div className="card">
            <h6 className="card-header">{title}</h6>
        </div>
    )
})

