import React from 'react';
import { Link } from 'react-router-dom';
import './Bienvenida.css';

const Bienvenida = () => {
  return (
    <div className="bienvenida-container">
      <h1 className="bienvenida-text">Bienvenidos a Nuestra Tienda Online</h1>
      <Link to="/products">
        <button className="btn btn-outline-dark bienvenida-button">Ver Productos</button>
      </Link>
    </div>
  );
};

export default Bienvenida;
