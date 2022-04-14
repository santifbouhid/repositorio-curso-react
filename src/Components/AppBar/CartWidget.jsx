import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export default function CartWidget() {
  return (
    <Box contenedorCart sx={{display: 'flex'}}>
      <ShoppingCartIcon/>
      <Typography>(0)</Typography> 
    </Box>
    
  );
}

