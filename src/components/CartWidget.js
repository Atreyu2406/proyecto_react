import CartContext from "../context/CartContext"
import { useContext } from "react"

const carrito = "images/carrito.png"

const CartWidget = () => {
    const { totalProducts } = useContext(CartContext)
    return (
        <>
            <img src={carrito} className="logo-carrito" alt="Logo Carrito" />
            <p>{totalProducts}</p>
        </>
    )
}

export default CartWidget;