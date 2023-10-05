import NavBar from './components/NavBar/navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './container/itemListContainer/itemListContainer';
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="BIENVENIDOS A NUESTRO ECOMMERCE!"/>
    </>
  );
}

export default App;