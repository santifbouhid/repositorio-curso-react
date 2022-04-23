import React, {useContext} from 'react'
import {CartProvider} from '../../Context/CartContext'

function Cart({producto}) {

  const{removeItem} = useContext(CartProvider);

  return (

    <div key={producto.id} style={{display:'flex'}}>
      <div>
          x{producto.cantidad}
      </div>
      <div>
          {producto.nombre}
      </div>
      <div>
        <button onClick={() => removeItem(producto.id)} >Quitar del carrito</button>
      </div>
    </div>



  )
}

export default Cart