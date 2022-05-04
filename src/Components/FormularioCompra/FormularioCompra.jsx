import React, { useState, useEffect, useContext } from "react";
import { CartProvider } from "../../Context/CartContext";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import OrdenDeCompra from "../OrdenDeCompra/OrdenDeCompra";

export default function FormularioCompra() {
  const [nombre, setNombre] = useState("");

  const [email, setEmail] = useState("");

  const [telefono, setTelefono] = useState("");

  const { cart, valorTotal } = useContext(CartProvider);

  const { compraFinalizada, setCompraFinalizada } = useState(false);

  const { ordenId, setOrdenId } = useState("");

  //   const [loading, setLoading] = useState(false);

  function terminarCompra() {
    const db = getFirestore();
    const ordenesRef = collection(db, "ordenes");

    let orden = {
      comprador: { nombre, telefono, email },
      cart,
      total: valorTotal,
    };

    addDoc(ordenesRef, orden)
      .then((res) => {
        console.log(res.id);
        setOrdenId(res.id);
        setCompraFinalizada(true);
      })
      .catch(() => alert("error"));
  }

  if (compraFinalizada === true) {
    return <OrdenDeCompra ordenId={ordenId} />;
  } else {
    return (
      <>
        <p>Nombre:</p>
        <input
          type={"text"}
          value={nombre}
          onChange={(e) => {
            setNombre(e.currentTarget.value);
          }}
        />
        <br />
        <p>Email:</p>
        <input
          type={"email"}
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <br />
        <p>Celular:</p>
        <input
          type={"text"}
          value={telefono}
          onChange={(e) => {
            setTelefono(e.currentTarget.value);
          }}
        />
        <br />
        <br />
        <button onClick={terminarCompra}>Finalizar compra</button>
      </>
    );
  }
}
