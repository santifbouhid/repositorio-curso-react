import React from 'react'
import Item from '../Item/Item'

export default function ItemList({productos}) {
  return (

    productos.map(p => (
        <Item 
            key={p.id}
            nombre={p.nombre}
            precio={p.precio}
            imagen={p.imagen}
        />
    ))

  )
}

