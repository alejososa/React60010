import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"
import { useEffect, useState } from "react"
import  data from "./data/MOCK_DATA.json"
import { CardList } from "./components/CardList"


function App() {
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
  },[])

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Buenas"/>
    <CardList products={products}/>

  

    
    </>
  )
}

export default App
