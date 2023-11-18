import { Container, Image } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from '../../components/firebase/client';
import { CartContext } from "../context/shopContext";
import ItemCount from "../counter/counter";
import "./itemDetail.css";

const ItemDetail = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(collection(db, "products"), id);
        const snapshot = await getDoc(productRef);

        if (snapshot.exists()) {
          setProduct({ ...snapshot.data(), id: snapshot.id });
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleOnAdd = () => {
    addToCart(product.id, quantity); 
  };

  return (
    <Container className="mt-5 item-detail-container">
      <div>
        <Image src={product.image} alt={product.title} thumbnail className="product-image" />
        <h4>{product.title}</h4>
        <h5>${product.price} - quedan {product.stock} disponibles</h5>
        <p>{product.description}</p>
        <ItemCount
          quantity={quantity}
          onAdd={setQuantity} 
          stock={product.stock}
        />
        <Button variant="dark" onClick={handleOnAdd}>Agregar</Button>
      </div>
    </Container>
  )
}

export default ItemDetail;
