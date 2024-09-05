import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailsContainer } from "./components/ItemDetailsContainer"
import { NavBar } from "./components/NavBar"
import { getFirestore } from "firebase/firestore"
import { CartProvider } from "./contexts/CartContext"
import Contacto from "./components/Contacto"
import { Carrito } from "./components/Carrito"



function App() {

 
  return (
    

  
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}></Route>
      <Route path="/category/:id" element={<ItemListContainer/>}></Route>
      <Route path="/Item/:id" element={<ItemDetailsContainer/>}></Route>
      <Route path="*" element={404}></Route>
      <Route path="contacto" element={<Contacto/>}></Route>
      <Route path="carrito" element={<Carrito/>}></Route>
    </Routes>
    
    

  

    
    </BrowserRouter>
    </CartProvider>
  );
}

export default App

