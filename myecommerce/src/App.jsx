import NavBar from './components/NavBar/navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './container/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Bienvenida from './components/bienvenida/bienvenida';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/category/:nombreCategoria" element={<ItemListContainer />} />
        <Route path="/products/:productoId" element={<ItemListContainer />} />
        <Route path="/products" element={<ItemListContainer />} />     
        <Route path="/item/:id" element={<ItemDetailContainer />} />     
        <Route path="/item/:category" element={<ItemDetailContainer />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;