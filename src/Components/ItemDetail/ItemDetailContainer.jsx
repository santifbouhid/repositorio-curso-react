import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import customFetch from "../utils/customFetch";
import productos from "../utils/productos";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function ItemDetailContainer() {
  const [prod, setProd] = useState({});

  const { id } = useParams();

  const productoSeleccionado = productos.find((p) => p.id === Number(id));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    customFetch(1000, productoSeleccionado)
      .then((resp) => setProd(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ItemDetail producto={prod} />
    </>
  );
}
