// CartWidget.jsx
import { FaShoppingCart } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';
import React, { useContext } from 'react'; 
import { CartContext } from '../context/shopContext'; 

function CartWidget() {
  const { getTotalQuantity } = useContext(CartContext); 
  const total = getTotalQuantity();
  return (
    <>
      <Badge bg="primary">
        <FaShoppingCart /> 
        {total}
      </Badge>
    </>
  );
};

export default CartWidget;
