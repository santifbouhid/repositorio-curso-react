import React, { createContext, useState } from "react";

export const CartProvider = createContext();

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, count) => {
    const indexProd = cart.findIndex((prod) => prod.id === item.id);
    if (indexProd !== -1) {
      const newCart = [...cart];
      newCart.cantidad = newCart.cantidad + count;
      setCart(newCart);
    } else {
      // const newItem = {...item, cantidad: Number(count)}
      setCart([...cart, item]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((prod) => prod.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartProvider.Provider
      value={{ cart, setCart, addItem, removeItem, clearCart }}
    >
      {children}
    </CartProvider.Provider>
  );
}
