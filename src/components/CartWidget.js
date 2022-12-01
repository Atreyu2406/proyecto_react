const carrito = "images/carrito.png"

const CartWidget = () => {
    return (
        <>
            <img src={carrito} className="logo-carrito" alt="Logo Carrito" />
            <p className="cant-carrito">3</p>
        </>
    )
}

export default CartWidget;