import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer"
import Navbar from './components/NavBar';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react';
import { CartProvider } from './context/CartContext';
import { NotificationServicesProvider } from './services/notification/NotificationServices';

function App() { 
  return (
    <div className="App">
      <NotificationServicesProvider>
        <BrowserRouter>     
          <CartProvider>
            <Navbar title="Atreyu Merchandising"/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenidos" color="orange" tamanio="3rem" borde="3px solid orange"/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenidos" color="orange" tamanio="3rem" borde="3px solid orange"/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/>
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </NotificationServicesProvider>  
    </div>
  );
}

export default App;
