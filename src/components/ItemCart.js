import CartContext from "../context/CartContext"
import { useContext } from "react"
import "./ItemCart.css"

const ItemCart = ({product}) => {
    const { removeProduct } = useContext(CartContext)
    return (
        <div className="item-cart-contenedor">
            <div className="item-cart">
                <img src={product.img} alt={product.name} className="item-cart-img"></img>
                <p>Nombre: {product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.price}</p>
                <p>Subtotal: {product.quantity * product.price}</p>
                <button className="item-cart-button" onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart