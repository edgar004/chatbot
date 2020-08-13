import React, { memo } from "react";

export const ListPlan = memo(({ title, precio }) => {
  return (
    <div className="card">
      <h5 className="card-header">{title}</h5>
      <div className="card-body">
        <h6 className="card-header">Precio: {precio}</h6>
      </div>
    </div>
  );
});
