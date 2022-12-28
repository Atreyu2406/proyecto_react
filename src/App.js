import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer"
import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar title="Atreyu Merchandising"/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos" color="orange" tamanio="3rem" borde="3px solid orange"/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenidos" color="orange" tamanio="3rem" borde="3px solid orange"/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
