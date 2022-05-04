import React, { useState, useEffect, useContext } from "react";
import { CartProvider } from "../Context/CartContext";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function TestFormularioCompra() {
  const [nombre, setNombre] = useState("");

  const [email, setEmail] = useState("");

  const [telefono, setTelefono] = useState("");

  const { cart } = useContext(CartProvider);

  function terminarCompra() {
    //example buyer

    // let ticket = {
    //   buyer: { name, phone, email },

    //   cart,

    //   total: 100,
    // };

    const comprador = { nombre, telefono, email };
  }

  useEffect(() => {
    console.log(nombre, email, telefono);
  }, [nombre, email, telefono]);

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
      <button onClick={() => terminarCompra()}>Finalizar compra</button>
    </>
  );
}
