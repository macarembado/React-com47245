import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                setProducto(json);
                console.log(json);
            })
            .catch(error => console.error(error));
    }, [id]);

    return (
        producto ? ( 
            <ItemDetail producto={producto} />
        ) : (
            <Spinner animation="border" variant="danger" />
        )
    );
};

export default ItemDetailContainer;
