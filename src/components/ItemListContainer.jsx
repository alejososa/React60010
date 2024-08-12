import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import data from "../data/MOCK_DATA.json"



export const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setloading] = useState(true)
    const {id}=useParams()


    useEffect(() => {
        new Promise((resolve) => setTimeout(()=>resolve(data),2000))
            .then((response) => {
                if (!id){
                    setItems(response)
                }else{
                    const filtered= response.filter((i)=>i.product_category===id);
                    setItems (filtered)
                }
                })
            .finally(() => setloading(false))

    }, [id]);

    if (loading) return "cargando";

    return (
        <Container className="d-flex flex-wrap mt-4">
            {items.map((product) => (
                <Card key={product.id}>
                    <Card.Img variant="top" src={product.img} style={{width:"25rem"}} />
                    <Card.Body>
                        <Card.Title>{product.product_name}</Card.Title>
                        <Card.Text> {product.category}</Card.Text>

                        <Link to={`/item/${product.id}`}><Button variant="primary">Detalle</Button></Link>
                    </Card.Body>
                </Card>

            ))}
        </Container>
    );
}