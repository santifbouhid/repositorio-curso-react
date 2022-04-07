import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../../ItemCount/ItemCount'

export default function Item({id, nombre, precio, imagen}) {
  return (
    <Card key={id} sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image={imagen}
            alt={`Imagen de ${nombre}`}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                ${precio}
            </Typography>
            <ItemCount stock={5}/>
        </CardContent>
    </Card>
  )
}

