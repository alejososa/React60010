import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const MyCard = ({ product }) => (
    <Card style={{ width: '25rem', height:"30rem" }}>
         <Card.Img variant="top" src={product.img} />
        
         
        <Card.Body>
            <Card.Title>{product.product_name}</Card.Title>
            
            
            <Button variant="primary">Comprar</Button>
        </Card.Body>
    </Card>

)


