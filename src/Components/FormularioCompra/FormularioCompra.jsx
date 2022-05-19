import React, { useState, useContext } from "react";
import { CartProvider } from "../../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import OrdenDeCompra from "../OrdenDeCompra/OrdenDeCompra";
import Loading from "../Loading/Loading";

export default function FormularioCompra() {
  const [nombre, setNombre] = useState("");

  const [email, setEmail] = useState("");

  const [telefono, setTelefono] = useState("");

  const { cart, valorTotal } = useContext(CartProvider);

  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const [ordenId, setOrdenId] = useState("");

  const [loading, setLoading] = useState(false);

  const [emailOk, setEmailOk] = useState(false);

  const [datosOk, setDatosOk] = useState(false);

  const validacionDeDatos = () => {
    let expReg =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let validar = expReg.test(email);
    if (validar) {
      setEmailOk(true);
      setDatosOk(true);
    } else {
      setEmailOk(false);
      setDatosOk(false);
    }
  };

  function terminarCompra() {
    validacionDeDatos();
    if (datosOk === true) {
      setLoading(true);
      const db = getFirestore();
      const ordenesRef = collection(db, "ordenes");

      let orden = {
        comprador: { nombre, telefono, email },
        cart,
        total: valorTotal,
      };

      addDoc(ordenesRef, orden)
        .then((res) => {
          setOrdenId(res.id);
          setCompraFinalizada(true);
          setLoading(false);
        })
        .catch(() => alert("error"))
        .finaly(() => setLoading(false));
    }
  }

  if (loading === true) {
    return <Loading />;
  } else {
    if (compraFinalizada === false) {
      return (
        <>
          <h2>Ingrese sus datos para poder finalizar la compra</h2>
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
            type={"text"}
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
          <br />
          <p>Celular:</p>
          <input
            type={"number"}
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
    } else if (compraFinalizada === true) {
      return <OrdenDeCompra ordenId={ordenId} />;
    }
  }
}
