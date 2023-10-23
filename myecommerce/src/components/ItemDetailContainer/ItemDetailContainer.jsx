import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`) 
            .then(res => res.json())
            .then(json => {
                setProducto(json)
                console.log(json)
            })
            .catch((error) => console.error(error))
    }, [id]);

    return (
        <>
            <h3>{producto?.title}</h3>
            <p>descripcion: {producto?.description} </p>
        </>
    );
};

export default ItemDetailContainer
