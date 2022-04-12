import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import customFetch from '../utils/customFetch'
import { producto } from '../utils/productos';

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({});


    useEffect(() => {
        customFetch(1000, producto)
        .then((resp) => setProd(resp))
        .catch((err) => console.log(err))
    }, []);


    return(
        <>
        <ItemDetail producto={prod} />
        </>
    )

}

export default ItemDetailContainer;