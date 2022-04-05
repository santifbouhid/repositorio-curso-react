import * as React from 'react';
import { useState } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ItemCount({stock}) {
    
    const [count, setCount] = useState(0);
    
    const agregarItem = () => {
        if (count < stock) {
            setCount (count + 1);
        }
    };

    const quitarItem = () => {
        if (count > 0) {
            setCount (count - 1);
        }
    };

    const mensaje = () => {
        if (count > 0) {
            alert('El producto se añadió correctamente')
        } 
    }

    return (
        <Grid container spacing={2} 
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{width: 300}}>
            <Grid item xs={4}>
                <Button onClick={quitarItem} variant="text" size="small">
                    -
                </Button>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="body1" align='center'>
                    {count}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Button onClick={agregarItem} variant="text" size="small">
                    +
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button onClick={mensaje} variant="outlined" size="small">
                    Añadir al carrito
                </Button>
            </Grid>
        </Grid>
        
    );
}





