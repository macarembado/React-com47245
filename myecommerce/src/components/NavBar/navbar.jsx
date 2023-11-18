import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget/cartWidget';
import Dropdown from 'react-bootstrap/Dropdown';
import './navbar.css';

const categorias = [
  "electronics",
  "jewelry",
  "men's clothing",
  "women's clothing"
];

function Navbarjsx() {
  return (
    <Navbar expand="lg" className="bg-custom">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Inicio</Link>
            <Link to="/products" className="text-custom">Productos</Link>
            <Link to="/nosotros" className="text-custom">Nosotros</Link>
            <Dropdown>
              <Dropdown.Toggle as={Link} to="#" variant="light" id="dropdown-ba">
                Categorías
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to={'/products'}>Todos</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to={"/category/pantalones"}>pantalones</Dropdown.Item>
                <Dropdown.Item as={Link} to={'/category/remeras'}>remeras</Dropdown.Item>
                <Dropdown.Item as={Link} to={"/category/zapatillas"}>zapatillas</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default Navbarjsx;
