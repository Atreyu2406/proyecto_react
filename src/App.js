import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar title="Atreyu Merchandising"/>
      <ItemListContainer greeting="Bienvenidos" color="orange" tamanio="3rem" borde="3px solid orange"/>
    </div>
  );
}

export default App;
