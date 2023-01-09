import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({product}) => {
//const Item = ({id, name, img}) => {
    return (
        //<h1>{name}</h1>
        <article className="item">
            <header>
                <h2 className="item-header">{product.name}</h2>
            </header>
            <picture>
                <img src={product.img} alt={product.name} className="item-img"></img>
            </picture>
            <section>
                <p className="item-info">
                    Precio: ${product.price}
                </p>
                <p className="item-info">
                    Stock: {product.stock} unidades
                </p>
            </section>
            <footer className="item-footer">
                <Link to={`/detail/${product.id}`}>Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item;