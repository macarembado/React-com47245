import { useState, useEffect } from 'react'
import Item from '../../components/item/item'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { nombreCategoria } = useParams()
    useEffect(() => {
        const url = nombreCategoria ? `https://fakestoreapi.com/products/category/${nombreCategoria}` : 'https://fakestoreapi.com/products'
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setProducts(json)
            })
            .catch(error => console.error(error))
        console.log(nombreCategoria)
    }, [nombreCategoria])
    
    return (
        <>
            <h2 className="saludo">{greeting}</h2>
            {products.length > 6 ? (
                <>
                    {products.map(pr => <Item producto={pr} key={pr.id} />)}
                </>
            ) : (
                <Spinner animation="border" variant="danger" />
            )}
        </>
    )
}

export default ItemListContainer