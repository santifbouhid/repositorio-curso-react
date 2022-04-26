import React, { useContext } from "react";
import { CartProvider } from "../../Context/CartContext";
import s from "./cart.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart({ producto }) {
  const { removeItem } = useContext(CartProvider);

  return (
    <div className={s.container_items}>
      <div className={s.titulos}>
        <div className={s.titulos_productos}>
          <img className={s.imagen} src={producto.imagen} alt="" />
          <div>{producto.nombre}</div>
        </div>
        <div className={s.titulos_precio_unidad}>{producto.precio}</div>
        <div className={s.titulos_cantidad}>{producto.cantidad}</div>
        <div className={s.titulos_precio_total}>
          {producto.cantidad * producto.precio}
        </div>
        <div className={s.borrar}>
          <DeleteIcon onClick={() => removeItem(producto.id)} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
