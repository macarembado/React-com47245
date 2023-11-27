import React, { useContext, useState } from 'react';
import { CartContext } from '../context/shopContext';
import './checkout.css';

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [buyerInfo, setBuyerInfo] = useState({ name: '', phone: '', email: '' });
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  const [validationError, setValidationError] = useState(false);

  const handleInputChange = (e) => {
    setBuyerInfo({
      ...buyerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!buyerInfo.name || !buyerInfo.phone || !buyerInfo.email) {
      setValidationError(true);
      return;
    }

    clearCart(); 
    setPurchaseCompleted(true); 
  };

  return (
    <div className="checkout-container">
      {purchaseCompleted ? (
        <div>
          <h2 className="checkout-title">¡Compra Finalizada con Éxito!</h2>
          <p className="checkout-message">¡Gracias por tu compra!</p>
        </div>
      ) : (
        <>
          <h2 className="checkout-title">Resumen de Compra</h2>
          {cart.map((item) => (
            <div key={item.product.id}>
              <p>{item.product.title} - Cantidad: {item.quantity} - Precio: ${item.product.price * item.quantity}</p>
            </div>
          ))}
          <h3>Total a Pagar: ${getTotalPrice()}</h3>

          {validationError && <p className="checkout-validation">Por favor, completa todos los campos para continuar.</p>}

          <form onSubmit={handleCheckout}>
            <label className="checkout-label">
              Nombre:
              <input type="text" name="name" value={buyerInfo.name} onChange={handleInputChange} required className="checkout-input" />
            </label>
            <br />
            <label className="checkout-label">
              Número de Teléfono:
              <input type="tel" name="phone" value={buyerInfo.phone} onChange={handleInputChange} required className="checkout-input" />
            </label>
            <br />
            <label className="checkout-label">
              Correo Electrónico:
              <input type="email" name="email" value={buyerInfo.email} onChange={handleInputChange} required className="checkout-input" />
            </label>
            <br />
            <button type="submit" className="checkout-button">Pagar</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
