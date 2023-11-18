import React, { useState, useContext } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/shopContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const CheckOut = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [buyerInfo, setBuyerInfo] = useState({ name: '', phone: '', email: '' });
  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    setBuyerInfo({ ...buyerInfo, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    if (!buyerInfo.name || !buyerInfo.phone || !buyerInfo.email) {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }

    try {
      const orderItems = cart.map((item) => ({
        id: item.product.id,
        title: item.product.title,
        price: item.product.price,
        quantity: item.quantity,
      }));

      const order = {
        buyer: buyerInfo,
        items: orderItems,
        total: getTotalPrice(),
      };

      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');

      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);

      clearCart();

      alert(`Tu orden ha sido procesada con éxito. Número de orden: ${docRef.id}`);
    } catch (error) {
      console.error('Error al procesar la orden:', error);
      alert('Hubo un error al procesar la orden. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <Container className="mt-5">
      <Col>
        <h1 className="mb-4 text-center" style={{ color: '#fff' }}>Checkout</h1>
      </Col>
      {orderId ? (
        <Col>
          <p className='text-center' style={{ color: '#fff' }}>Tu orden ha sido procesada con éxito. Número de orden:</p>
          <p className='text-center' style={{ color: 'yellow' }}>{orderId}</p>
          <Col className='text-center'>
            <Link to="/" className="btn btn-primary w-75 mt-2">
              Volver al inicio
            </Link>
          </Col>
        </Col>
      ) : (
        <Form>
          <Form.Label style={{ color: '#fff' }}>Complete todos los datos del formulario</Form.Label>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder='Nombre' name="name" value={buyerInfo.name} onChange={handleInputChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="tel" placeholder='Telefono' name="phone" value={buyerInfo.phone} onChange={handleInputChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder='Email' name="email" value={buyerInfo.email} onChange={handleInputChange} required />
          </Form.Group>

          <Button variant="success" onClick={handleCheckout}>
            Finalizar Compra
          </Button>
        </Form>
      )}
    </Container>
  );
}

export default CheckOut;
