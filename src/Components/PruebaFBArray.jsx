import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function PruebaFBArray() {
  // Bd4EwpXEyR2EAvDHfsOd
  // productos

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    const arrayRef = collection(db, "productos");

    getDocs(arrayRef).then((res) => {
      setProductos(res.docs.map((item) => ({ id: item.id, ...item.data() })));
    });
  }, []);

  useEffect(() => {
    console.log(productos);
  }, [productos]);

  return <></>;
}
