import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import customFetch from '../utils/customFetch'
import productos from '../utils/productos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({});

    const {id} = useParams();

    const productoSeleccionado = productos.find(p => p.id === Number(id));


    useEffect(() => {
        customFetch(1000, productoSeleccionado)
        .then((resp) => setProd(resp))
        .catch((err) => console.log(err))
    }, [id]);


    return(
        <>
        <ItemDetail producto={prod} />
        </>
    )

}

export default ItemDetailContainer;