import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../context/CartContext"
import ItemCart from "./ItemCart"
import "./Cart.css"

const Cart = () => {
    const { cart, totalPrice } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to="/">Hacer compras</Link>
            </>
        )
    }
    return (
        <>
            {cart.map(product => <ItemCart key={product.id} product={product}/>)}
            <p className="cart-total">Total: {totalPrice()}</p>
        </>
    )
}

export default Cart