import { createContext, useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../../components/firebase/client';

export const CartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        const productsSnapshot = await getDocs(productsCollection);
        const productsData = productsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error al obtener productos de Firebase:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (productId, quantity) => {
    try {
      const productToAdd = products.find((product) => product.id === productId);

      const existingItemIndex = cart.findIndex(
        (item) => item.product.id === productToAdd.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += quantity;
        setCart(updatedCart);
      } else {  
        setCart((prevCart) => [...prevCart, { product: productToAdd, quantity }]);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const removeFromCart = (productId, quantity = 1) => {
    const updatedCart = cart.reduce((acc, item) => {
      if (item.product.id === productId) {
        if (item.quantity > quantity) {
          acc.push({ product: item.product, quantity: item.quantity - quantity });
        }
      } else {
        acc.push(item);
      }
      return acc;
    }, []);

    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
  };

  const getTotalQuantity = () => {
    return cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  };

  const getQuantityById = (productId) => {
    const item = cart.find((element) => element.product.id === productId);
    return item ? item.quantity : 0;
  };

  const data = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalPrice,
    getTotalQuantity,
    getQuantityById,
    products,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default ShoppingCartProvider;
