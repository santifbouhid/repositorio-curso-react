import React, { createContext, useEffect, useState } from "react";

export const CartProvider = createContext();

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  const [valorTotal, setValorTotal] = useState(0);

  const addItem = (item, count) => {
    const indexProd = cart.findIndex((prod) => prod.id === item.id);
    if (indexProd !== -1) {
      const newCart = [...cart];
      newCart.map((i) =>
        i.id === item.id ? (i.cantidad = i.cantidad + count) : null
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, cantidad: count }]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((prod) => prod.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    if (cart !== []) {
      const valor = cart.reduce(
        (total, prod) => total + prod.cantidad * prod.precio,
        0
      );
      setValorTotal(valor);
    }
  }, [cart]);

  return (
    <CartProvider.Provider
      value={{ cart, setCart, addItem, removeItem, clearCart, valorTotal }}
    >
      {children}
    </CartProvider.Provider>
  );
}
