import { FaShoppingCart } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/shopContext';
import Cart from '../cart/cart'; 

function CartWidget() {
  const { getTotalQuantity } = useContext(CartContext);
  const total = getTotalQuantity();
  
  const [cartVisible, setCartVisible] = useState(false); 
  const toggleCart = () => {
    setCartVisible(!cartVisible); 
  };

  return (
    <>
      <div onClick={toggleCart}> 
        <Badge bg="primary">
          <FaShoppingCart />
          {total}
        </Badge>
      </div>
      {cartVisible && <Cart />} 
    </>
  );
};

export default CartWidget;
