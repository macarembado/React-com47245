import NavBar from './components/NavBar/navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './container/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ShopContextProvider from './components/context/shopContext';
import Cart from './components/cart/cart';
import CheckOut from './components/checkout/checkout';
import Bienvenida from './components/bienvenida/bienvenida';


function App() {
  return (
   <ShopContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route exact path='/' element={<Bienvenida/>} />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
           <Route exact path='/cart' element={<Cart/>} />
          { <Route exact path='/CheckOut' element={<CheckOut/>} />}  
              </Routes>
    </BrowserRouter>
  </ShopContextProvider>
  );
}

export default App;
