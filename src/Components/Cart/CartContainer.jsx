import React, {useContext} from 'react'
import {CartProvider} from '../../Context/CartContext'
import Cart from './Cart';


function CartContainer() {
  const {cart, clearCart} = useContext(CartProvider);

  return (
    <>
      {cart.map(p => (
        <Cart 
          producto={p}
        />
      ))}
    <div>
        <button onClick={() => clearCart()}>Limpiar Carrito</button>
    </div>
    </>
  )
}

export default CartContainer