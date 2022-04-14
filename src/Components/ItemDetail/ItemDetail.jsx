import { Box, Typography } from '@mui/material';
import React from 'react';
import s from './itemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount';
import Paper from '@mui/material/Paper';

export default function ItemDetail( {producto} ) {

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

                    <ItemCount stock={5} />

                </Box>
            </Box>
            
        </Paper>
    );
};

