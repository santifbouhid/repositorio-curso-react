import React, { useContext } from "react";
import { CartProvider } from "../../Context/CartContext";
import Cart from "./Cart";
import s from "./cart.module.css";

export default function CartContainer() {
  const { cart, clearCart } = useContext(CartProvider);

  return (
    <>
      {/* TITULOS */}
      <div className={s.titulos}>
        <div className={s.titulos_productos}>Producto</div>
        <div className={s.titulos_precio_unidad}>Precio unidad</div>
        <div className={s.titulos_cantidad}>Cantidad</div>
        <div className={s.titulos_precio_total}>Total</div>
      </div>
      {cart.map((p) => (
        <Cart producto={p} />
      ))}
      <div className={s.footer_cart}>
        <div className={s.titulos}>
          <button className={s.limpiar_carrito} onClick={() => clearCart()}>
            Limpiar Carrito
          </button>
          <div className={s.espacio_total}></div>
          <div className={s.titulo_total}>Total:</div>
          <div className={s.precio_total}>$</div>
          <button>Comprar</button>
        </div>
      </div>
    </>
  );
}
