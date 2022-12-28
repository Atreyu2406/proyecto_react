
const ItemDetail = ({product}) => {
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
            <footer className="item-footer">
                <button>Ver Detalle</button>
            </footer>
        </article>
    )
}

export default ItemDetail;