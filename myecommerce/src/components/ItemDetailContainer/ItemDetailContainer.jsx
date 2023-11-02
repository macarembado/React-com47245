import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../itemDetail/itemDetail";

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
         <ItemDetail producto={producto}/>
      </>
    );
};

export default ItemDetailContainer
