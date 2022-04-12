import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/AppBar/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import { Container } from '@mui/material';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import ItemCount from './Components/ItemCount/ItemCount';




export default function App() {
  return (
    <>
    <NavBar/>
    <Container>

      <ItemDetailContainer/>

      

    </Container>
    
    </>
    
    



      
  );
}

