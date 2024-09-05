import React, { useContext } from "react";
import cart from "../assets/cart3.svg"
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";


export const CartWidget= ()=>{

    const {cantidadEnCarrito} = useContext(CartContext);
return (
<>

<Link as={NavLink} to="/carrito">
<img src={cart} alt="cart" /> <span className="numeroDeCompras">{cantidadEnCarrito()}</span>  
</Link>
</>
);
}