import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/AppBar/NavBar';
import ItemListContainer from './Components/Items/ItemListContainer/ItemListContainer';
import { Container } from '@mui/material';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import Cart from './Components/Cart/Cart';





export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>


      <Container>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
          <Route path="/producto/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          

        </Routes>
        
      </Container> 
    
      </BrowserRouter>

  );
}

