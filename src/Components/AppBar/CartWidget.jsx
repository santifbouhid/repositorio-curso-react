import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CartProvider } from "../../Context/CartContext";
import { Link } from 'react-router-dom';



export default function CartWidget() {

  const { cart } = useContext(CartProvider);


  return (
    <Link to='/cart' >
    <Box contenedorCart sx={{ display: 'flex' }}>
      <ShoppingCartIcon />
     <Typography>({cart.length})</Typography>
    </Box>
    </Link>
  );
}

