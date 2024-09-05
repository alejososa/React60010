import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import data from "../data/MOCK_DATA.json"


export const ItemDetailsContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setloading] = useState(true)
    const { id } = useParams()


    useEffect(() => {
//firebase
        const docRef = doc(db, "products", id);
        getDoc(docRef)
            .then((resp) => {
                setItem(
                    {...resp.data(), id:resp.id}
                )
            }).finally(() => setloading(false))


        /* localstorage
        new Promise((resolve) => setTimeout(() => resolve(data), 2000))
            .then(response => {
                const finded = response.find(i => i.id === Number(id))
                setItem(finded)
            })
            .finally(() => setloading(false))
            */
    }, [id]);

    if (loading) return "cargando";

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>


    );
}

/*
al separarlos ya no es necesario usarlo aca
<Container className="mt-4 text-center">
            <h1>{item.product_name}</h1>

            <img src={item.img} alt="imagen" height={200} />
            <br />
            <b>${item.product_price}</b>
            
            <ItemCount
           
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={()=> []}
            
            />
        </Container>
*/