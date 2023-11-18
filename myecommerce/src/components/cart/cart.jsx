import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Card, Row } from 'react-bootstrap';
import { CartContext } from '../context/shopContext';
import './cart.css'; 

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useContext(CartContext);

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <Container className="cart-container">
      <div className="text-center mb-4">
        <h1>Carrito de Compras</h1>
      </div>
      {cart.length === 0 ? (
        <div className="text-center mb-4">
        </div>
      ) : (
        <>
          <Row xs={1} md={2} lg={3} className="g-4">
            {cart.map((item) => (
              <Card key={item.product.id} className="card">
                <Card.Img variant="top" src={item.product.image} />
                <Card.Body>
                  <Card.Title>{item.product.title}</Card.Title>
                  <Card.Text>
                    Precio: ${item.product.price}<br />
                    Cantidad: {item.quantity}<br />
                    Valor total: ${item.product.price * item.quantity}
                  </Card.Text>
                  <Button variant="danger" onClick={() => removeFromCart(item.product.id)}>
                    Eliminar
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
          <div className="d-flex flex-column align-items-center mt-4">
            <p className="mb-3">
              Total: ${getTotalPrice()}
            </p>
            <div className="d-flex justify-content-around w-100">
              <Link to="/CheckOut" className="btn btn-success w-40">
                Comprar
              </Link>
              <Button variant="danger" className="w-40" onClick={handleClearCart}>
                Vaciar Carrito
              </Button>
            </div>
            <Link to="/" className="btn btn-primary w-50 mt-3">
              Seguir comprando
            </Link>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
