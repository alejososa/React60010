import React from "react";
import { Link } from "react-router-dom";


const Item = ({ product }) => {
    return (
        <div className="product">
            <img src={product.img} alt="{product.ptoduct_name" />
            <div>
                <h4>{product.product_name} </h4>
                <p>Precio: ${product.product_price}</p>
            <p>Categoría: {toCapital(product.product_category)}</p>
            <Link className="ver-mas" to={`/item/${product.id}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default Item;