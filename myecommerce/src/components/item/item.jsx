import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

const ItemCard = ({ producto }) => {
  return (
    <div className="item-card">
      <div className="item-image-container">
        <img className="item-image" src={producto.image} alt={producto.title} />
      </div>
      <h3>{producto.title}</h3>
      {/* <p>{producto.description}</p> */}
      <p>USD {producto.price}</p>
      <Link to={`/item/${producto.id}`} className="custom-link">
        Ver Producto
      </Link>
    </div>
  );
}

export default ItemCard;
