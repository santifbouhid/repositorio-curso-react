import React, { useEffect, useState } from 'react';
import customFetch from './utils/customFetch';
import productos from './utils/productos'
import ItemList from './Items/ItemList/ItemList'



export default function ItemListContainer() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    customFetch(3000, productos)
    .then((resp) => setProd(resp))
    .catch((err) => console.log(err))
  }, []);

  return (
    <>
      <ItemList productos={prod}/>
    </>
  );
}

