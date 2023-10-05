import { FaShoppingCart } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';


const CartWidget = () => {
  return (
    <>
      <Badge bg="primary">
        <FaShoppingCart /> 
        6
      </Badge>
    </>
  );
};

export default CartWidget;
