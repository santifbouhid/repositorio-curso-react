import React from "react";
import { Link } from "react-router-dom";

function OrdenDeCompra({ ordenId }) {
  return (
    <>
      <h1>¡COMPRA REALIZADA CON ÉXITO!</h1>
      <h2>Códio de orden: {ordenId}</h2>
      <Link to="/">
        <button>Volver a la tienda</button>
      </Link>
    </>
  );
}

export default OrdenDeCompra;
