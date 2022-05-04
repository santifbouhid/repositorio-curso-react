// import React, { useState, useEffect, useContext } from "react";
// import { CartProvider } from "../../Context/CartContext";
// import {
//   addDoc,
//   collection,
//   getDocs,
//   getFirestore,
//   query,
//   where,
// } from "firebase/firestore";
// import FormularioCompra from "../FormularioCompra/FormularioCompra";

// export default function OrdenDeCompraContainer() {
//   const [nombre, setNombre] = useState("");

//   const [email, setEmail] = useState("");

//   const [telefono, setTelefono] = useState("");

//   const { cart, valorTotal } = useContext(CartProvider);

//   const { compraFinalizada, setCompraFinalizada } = useContext(false);

//   //   const [loading, setLoading] = useState(false);

//   function terminarCompra() {
//     const db = getFirestore();
//     const ordenes = collection(db, "ordenes");

//     let orden = {
//       comprador: { nombre, telefono, email },
//       cart,
//       total: valorTotal,
//     };

//     addDoc(ordenes, orden).then((resp) => {
//       console.log(resp);
//       setCompraFinalizada(true);
//     });
//   }

//   useEffect(() => {}, []);

//   return (
//     <>
//       <FormularioCompra setNombre setEmail setTelefono />
//     </>
//   );
// }
