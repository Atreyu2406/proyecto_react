import { useState, useContext } from "react";
import FunctionCounter from "./FunctionCounter";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const ItemDetail = ({product}) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useContext(CartContext)

    const handleOnAdd = (quantify) => {
        setGoToCart(true)
        addProduct(product, quantify)
        console.log(`Se agregaron ${quantify} productos`)
    }

    return (
        <article className="item">
            <header>
                <h2 className="item-header">{product.name}</h2>
            </header>
            <picture>
                <img src={product.img} alt={product.name} className="item-img"></img>
            </picture>
            <section>
                <p className="item-info">
                    Categoría: {product.category}
                </p>
                <p className="item-info">
                    Precio: ${product.price}
                </p>
            </section>
            <footer className="counter-footer">
                {/* <button onClick={() => setShow(!show)}>{show ? "Cerrar Contador" : "Abrir Contador"}</button> */}
                {goToCart ? <Link to="/cart">Finalizar Compra</Link> : <FunctionCounter stock={10} initial={2} onAdd={handleOnAdd}/>}
                {/* <button>Ver Detalle</button> */}
            </footer>
        </article>
    )
}

export default ItemDetail;