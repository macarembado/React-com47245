import React from 'react';
import { Button } from 'react-bootstrap';
import './counter.css';

const ItemCount = ({ quantity, onAdd, stock }) => {
  const handleIncrement = () => {
    if (quantity < stock) {
      onAdd(quantity + 1); 
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      onAdd(quantity - 1); 
    }
  };

  return (
    <div className="item-count-container">
      <div className="item-count">
        <Button variant="dark" onClick={handleDecrement}>-</Button>
        <p>{quantity}</p>
        <Button variant="dark" onClick={handleIncrement}>+</Button>
      </div>
    </div>
  )
}

export default ItemCount;
