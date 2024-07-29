import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const MyCard = ({ product }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
            <Card.Title>{product.product_name}</Card.Title>
            <Card.Text>
                {product.product_description}
            </Card.Text>
            <Button variant="primary">Comprar</Button>
        </Card.Body>
    </Card>

)


