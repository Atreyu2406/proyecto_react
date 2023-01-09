import { getBooks } from '../asyncmock';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
// import "./ItemListContainer.css"

const ItemListContainer = ({greeting, color, tamanio, borde}) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    useEffect(() => {
        if (categoryId) {
            getBooks
            .then((res) => {
                setBooks(res.filter(cat => cat.category === categoryId));
            })
        } else {
            getBooks
            .then((res) => {
                setBooks(res);
            })
        }
        getBooks
        .catch((error) => {
            console.log("Error")
        })
        .finally(() => {
            //ejecutar siempre y al final
            setLoading(false);
        })  
        return (() => {
            setBooks()
        })
    }, [categoryId]);
    return (
        <div className='item-list-container'>
            <h1 style={{color: color, fontSize: tamanio, border: borde}}>{greeting}</h1>
            {/* <button onClick={() => setShow(!show)}>{show ? "Cerrar Contador" : "Abrir Contador"}</button>
            {show ? <FunctionCounter stock={10} initial={2} onAdd={handleOnAdd}/> : ""} */}
            {loading ? <h1>CARGANDO...</h1> : <ItemList products={books}/>}
        </div>
    )
}

export default ItemListContainer;