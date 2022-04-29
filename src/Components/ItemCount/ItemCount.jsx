import * as React from "react";
import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import s from "./itemCount.module.css";
import { CartProvider } from "../../Context/CartContext";

export default function ItemCount({ stock, onAdd, producto }) {
  const [count, setCount] = useState(0);

  const { addItem, cart } = useContext(CartProvider);

  const agregarItem = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const quitarItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const mensaje = () => {
    if (count > 0) {
      alert("El producto se añadió correctamente");
    }
  };

  const handleClick = () => {
    producto.cantidad = count;
    addItem(producto, count);
    onAdd(count);
  };

  return (
    <Box className={s.itemCount}>
      <Box className={s.contador}>
        <Button onClick={quitarItem} variant="text">
          -
        </Button>
        <Typography variant="body1" component="p" className={s.numeroContador}>
          {count}
        </Typography>
        <Button onClick={agregarItem} variant="text">
          +
        </Button>
      </Box>
      <Box className={s.contenedorAgregarAlCarrito}>
        <Button
          onClick={handleClick}
          variant="outlined"
          className={s.agregarAlCarrito}
        >
          Añadir al carrito
        </Button>
      </Box>
    </Box>
  );
}
