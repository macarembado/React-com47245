import { useState, useEffect } from 'react';
import Item from '../../components/item/item';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import { db } from '../../components/firebase/client';
import { collection, getDocs, query, where } from 'firebase/firestore'; 


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState('Productos');
    const { categoryId } = useParams(); 

    useEffect(() => {
        const obtenerProductos = async () => {
            const productosRef = collection(db, "products");

            const consultaProductos = categoryId ? query(productosRef, where("categoryId", "==", categoryId)) : productosRef;

            const querySnapshot = await getDocs(consultaProductos);
            const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            
            setProductos(data);
            setTitulo(categoryId);
        };

        obtenerProductos();
    }, [categoryId]);

    return (
        <>
            <h2 className="saludo">{titulo}</h2>
            {productos.length > 0 ? (
                <>
                    {productos.map(pr => <Item producto={pr} key={pr.id} />)}
                </>
            ) : (
                <Spinner animation="border" variant="danger" />
            )}
        </>
    );
};

export default ItemListContainer;
