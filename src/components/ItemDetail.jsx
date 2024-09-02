import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ item }) => {

    const { cart, agregarAlCArrito } = useContext(CartContext);
    console.log(cart);


    const [cantidad, setCantidad ] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.product_stock && setCantidad(cantidad + 1)
    }

    return (
        <div className="container mt-4 text-center" >
            <div className="producto-detalle">
                <img src={item.img} alt={item.product_name} height={200} />
                <div>
                    <h3 className="titulo">{item.product_name}</h3>
                    
                    <p className="categoria">Categoría: {(item.product_category)}</p>
                    <p className="precio">${item.product_price}</p>
                    <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail