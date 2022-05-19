import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {
  const [arrayProductos, setArrayProductos] = useState([]);
  const [prod, setProd] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const arrayRef = collection(db, "productos");
    getDocs(arrayRef)
      .then((res) => {
        setArrayProductos(
          res.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const productoSeleccionado = arrayProductos.find((p) => p.id === id);
    setProd(productoSeleccionado);
  }, [arrayProductos, id]);

  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ItemDetail producto={prod} />
    </>
  );
}
