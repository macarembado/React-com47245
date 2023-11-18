import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";
import { db } from '../../components/firebase/client';
import { doc, getDoc } from 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        const obtenerProducto = async () => {
            const docRef = doc(db, "products", id);
            const Snapshot = await getDoc(docRef);

            if (Snapshot.exists()) {
                const data = Snapshot.data();
                setItem({ ...data, id: Snapshot.id });
            } else {
                console.log("El producto no existe"); 
            }
        };

        obtenerProducto();
    }, [id]);


    return (
        <div>
            {item ? <ItemDetail producto={item} /> : <Spinner animation="border" variant="danger" />}
        </div>
    );
};

export default ItemDetailContainer;
