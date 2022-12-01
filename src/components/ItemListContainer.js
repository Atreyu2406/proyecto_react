const ItemListContainer = ({greeting, color, tamanio, borde}) => {
    return (
        <div>
            <h1 style={{color: color, fontSize: tamanio, border: borde}}>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;