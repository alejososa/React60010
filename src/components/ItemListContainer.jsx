import Container from "react-bootstrap/Container";


export const ItemListContainer=(props)=>{
    return (
    <Container className="mt-4 text-center">
        <h1>{props.greeting}</h1>
    </Container>
    );
}