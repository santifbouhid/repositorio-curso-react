import React from "react";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import s from "./item.module.css";

export default function Item({ productos }) {
  return (
    <Card className={s.cardItem} elevation={3}>
      <CardMedia
        className={s.cardImagen}
        component="img"
        image={productos.imagen}
        alt={`Imagen de ${productos.nombre}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productos.nombre}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {productos.precio}
        </Typography>
        <Link to={`/producto/${productos.id}`} className={s.link}>
          <Typography
            variant="body1"
            color="text.secondary"
            className={s.verDetalle}
          >
            Ver detalle
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
