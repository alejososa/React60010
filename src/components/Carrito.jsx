import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



export const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }


    return (
        <div className="container">
            <h1 className="main-title">Carrito</h1>

            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <br />
                        <h3>{prod.product_name}</h3>
                        <p>Precio unit: ${prod.product_price}</p>
                        <p>Precio total: ${prod.product_price * prod.cantidad}</p>
                        <p>Cant: {prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                    <>
                        <h2>Precio total: ${precioTotal()}</h2>
                        
                        <Button variant="danger" onClick={handleVaciar}>Vaciar</Button><span></span>
                        <Button variant="success" href='/finalizar'>Comprar</Button>
                        
                    </> :
                    <h2>No seleccionaste ningún producto aún</h2>
            }

        </div>
    )
}
