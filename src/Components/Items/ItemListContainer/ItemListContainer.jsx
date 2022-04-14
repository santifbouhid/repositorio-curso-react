import React, { useEffect, useState, } from 'react';
import customFetch from '../../utils/customFetch';
import productos from '../../utils/productos'
import ItemList from '../ItemList/ItemList'
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import s from './itemListContainer.module.css'



export default function ItemListContainer() {
  const [prod, setProd] = useState([]);

  const {categoriaId} = useParams();

  const productosFiltrados = productos.filter(producto => producto.categoria === categoriaId);

  useEffect(() => {


    customFetch(500, (categoriaId ? productosFiltrados : productos))
    .then((resp) => setProd(resp))
    .catch((err) => console.log(err))
  }, [categoriaId]);

  return (
    <Box className={s.contenedorItemList}>
      <ItemList productos={prod} />
    </Box>
      

  );
}

