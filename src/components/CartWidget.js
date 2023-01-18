import CartContext from "../context/CartContext"
import { useContext } from "react"
import "./CartWidget.css"

const carrito = "images/carrito.png"

const CartWidget = () => {
    const { totalProducts } = useContext(CartContext)
    return (
        <div className="logo-contenedor">
            <img src={carrito} className="logo-carrito" alt="Logo Carrito" />
            <p className="logo-counter">{totalProducts()}</p>
        </div>
    )
}

export default CartWidget;