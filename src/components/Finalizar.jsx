import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';


const Finalizar =()=>{

const [pedidoId, setPedidoId] = useState("");

const {carrito, precioTotal, vaciarCarrito } =useContext(CartContext)

const { register, handleSubmit } = useForm();

const comprar = (data) => {
    const pedido = {
        cliente: data,
        productos: carrito,
        total: precioTotal()
    }
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();
        })

}

if (pedidoId) {
    return (
        <div className="container">
            <h1 className="main-title">Gracias por elegirnos</h1>
            <p>Tu número de pedido es: {pedidoId}</p>
            <p>Guarda este número para seguir tu pedido</p>
        </div>
    )
}


    return(
        <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} /> <br /><br />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} /> <br /><br />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} /> <br /><br />
<br />
            <button className="enviar" type="submit">Enviar</button>

        </form>
    </div>
    )
}

export default Finalizar;