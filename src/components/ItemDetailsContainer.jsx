import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";


import data from "../data/MOCK_DATA.json"


export const ItemDetailsContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setloading] = useState(true)
    const { id } = useParams()


    useEffect(() => {
        new Promise((resolve) => setTimeout(() => resolve(data), 2000))
            .then(response => {
                const finded = response.find(i => i.id === Number(id))
                setItem(finded)
            })
            .finally(() => setloading(false))
    }, [id]);

    if (loading) return "cargando";

    return (
        <Container className="mt-4 text-center">
            <h1>{item.product_name}</h1>

            <img src={item.img} alt="imagen" height={200} />
            <br />
            <b>${item.product_price}</b>
        </Container>

    );
}