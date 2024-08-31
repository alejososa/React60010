import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailsContainer } from "./components/ItemDetailsContainer"
import { NavBar } from "./components/NavBar"
//import { useEffect, useState } from "react"
//import  data from "./data/MOCK_DATA.json"
import { getFirestore } from "firebase/firestore"



function App() {


  return (
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}></Route>
      <Route path="/category/:id" element={<ItemListContainer/>}></Route>
      <Route path="/Item/:id" element={<ItemDetailsContainer/>}></Route>
      <Route path="*" element={404}></Route>
      
    </Routes>
    
    

  

    
    </BrowserRouter>
    
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
