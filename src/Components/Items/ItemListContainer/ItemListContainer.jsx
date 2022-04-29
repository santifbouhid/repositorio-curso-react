import React, { useEffect, useState } from "react";
import customFetch from "../../utils/customFetch";
import productos from "../../utils/productos";
import ItemList from "../ItemList/ItemList";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import s from "./itemListContainer.module.css";
import Loading from "../../Loading/Loading";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function ItemListContainer() {
  const [prod, setProd] = useState([]);

  const { categoriaId } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const arrayRef = collection(db, "productos");

    const productosFiltrados = categoriaId
      ? query(
          collection(db, "productos"),
          where("categoria", "==", categoriaId)
        )
      : [];

    if (categoriaId) {
      getDocs(productosFiltrados)
        .then((res) => {
          setProd(res.docs.map((item) => ({ id: item.id, ...item.data() })));
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getDocs(arrayRef)
        .then((res) => {
          setProd(res.docs.map((item) => ({ id: item.id, ...item.data() })));
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoriaId]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Box className={s.contenedorItemList}>
      <ItemList productos={prod} />
    </Box>
  );
}
