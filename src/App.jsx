import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailsContainer } from "./components/ItemDetailsContainer"
import { NavBar } from "./components/NavBar"
//import { useEffect, useState } from "react"
//import  data from "./data/MOCK_DATA.json"
import { getFirestore } from "firebase/firestore"
import { useState } from "react"
import { CartContext } from "./contexts/CartContext"
import Contacto from "./components/Contacto"



function App() {

  const [cart, setCart] = useState([]);
  
  const cartCantidad=()=>{
    return cart.reduce((acc,prod)=>acc+prod.cantidad,0)
}
  return (
    

    <CartContext.Provider  value={{cart, setCart,cartCantidad}}>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}></Route>
      <Route path="/category/:id" element={<ItemListContainer/>}></Route>
      <Route path="/Item/:id" element={<ItemDetailsContainer/>}></Route>
      <Route path="*" element={404}></Route>
      <Route path="contacto" element={<Contacto/>}></Route>
    </Routes>
    
    

  

    
    </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App

/* lo tenia aca pero ya noe s necesario
const [products, setProducts] = useState([])
const [loading, setloading] = useState(true)
  useEffect(()=>{
    new Promise((res, rej)=>{
setTimeout(()=>res(data), 2000)
    })
    .then (response=>{
      setProducts(response)
    })
    .catch(error=>console.error(error))
    .finally(()=>setloading(false))
  },[]);
  */
