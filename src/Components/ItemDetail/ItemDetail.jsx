import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import s from './itemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export default function ItemDetail( {producto} ) {

    const [cantItemsCart, setCantItemsCart] = useState(0);

    const [agregado, setAgregado] = useState(false);

    const onAdd = (cantItems) => {
        setCantItemsCart(cantItems)
        if (cantItems>0){
            setAgregado(true)
        } ;
    };

    

    return(
        <Paper className={s.itemDetail} elevation={5}>
            

            <img src={producto.imagen} alt={producto.nombre} className={s.imagen}/>

            <Box className={s.contenedorinfo}>

                <Typography variant="h3" component="h2">
                    {producto.nombre}
                </Typography>

                <Typography variant="h2" component="p">
                    {producto.precio}
                </Typography>

                <Typography variant="body1" component="p" className={s.itemDescripcion}>
                    {producto.descripcion}
                </Typography>

                <Box className={s.itemCount}>

                   {
                       agregado ?  <Link to='/cart'>Ir al carrito</Link> : <ItemCount stock={producto.stock} onAdd={onAdd} /> 
                   }
                    

                </Box>
            </Box>
            
        </Paper>
    );
};

