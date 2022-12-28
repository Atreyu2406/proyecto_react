// import { link } from "react-router-dom"
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
                    Categoría: {product.category}
                </p>
                <p className="item-info">
                    Precio: ${product.price}
                </p>
            </section>
            <footer className="item-footer">
                <button>Ver Detalle</button>
            </footer>
        </article>
    )
}

export default Item;