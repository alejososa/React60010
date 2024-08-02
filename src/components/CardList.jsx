import { Container } from "react-bootstrap";
import {MyCard} from "./Card";


export const CardList= ({products})=>(
    <Container className= "d-flex flex-wrap mt-4">
        {products.map(product=>(
            <MyCard key={product.id} product={product}/>
        ))}
    </Container>
)

