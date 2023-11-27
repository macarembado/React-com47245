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
      <div >
        <h1>Tu Carrito de Compras</h1>
      </div>
      {cart.length === 0 ? (
        <div>
        </div>
      ) : (
        <>
         
            {cart.map((item) => (
              <Card key={item.product.id} className="card">
                <Card.Body>
                  <Card.Title>{item.product.title}</Card.Title>
                  <Card.Text>
                    Precio: ${item.product.price}<br />
                    Cantidad: {item.quantity}<br />
                    Valor total: ${item.product.price * item.quantity}
                  </Card.Text>
                  <Button variant="warning" onClick={() => removeFromCart(item.product.id)}>
                    Eliminar
                  </Button>
                </Card.Body>
              </Card>
            ))}
        
          <div>
            <p >
              Total: ${getTotalPrice()}
            </p>
            <div>
              <Link to="/CheckOut" className="btn btn-success w-40">
                Comprar
              </Link>
              <Button variant="warning"  onClick={handleClearCart}>
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
