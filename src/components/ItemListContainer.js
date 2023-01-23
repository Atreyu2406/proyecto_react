import { getBooks } from '../asyncmock';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import NotificationContext from '../services/notification/NotificationServices';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firestoreDb } from '../services/firebase/firebase';

// import "./ItemListContainer.css"

const ItemListContainer = ({greeting, color, tamanio, borde}) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    const setNotification = useContext(NotificationContext);

    useEffect(() => {
        setNotification(`success`, `Bienvenido`)
        
        const collectionRef = categoryId ? 
            query(collection(firestoreDb, "books"), where("category", "==", categoryId)) :
            collection(firestoreDb, "books")

        getDocs(collectionRef)
        .then(res => {
            const products = res.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setBooks(products)
        })
        .finally(() => {
            setLoading(false)
        })

        // return (() => {
        //     setBooks()
        // })

        // if (categoryId) {
        //     getBooks
        //     .then((res) => {
        //         setBooks(res.filter(cat => cat.category === categoryId));
        //     })
        // } else {
        //     getBooks
        //     .then((res) => {
        //         setBooks(res);
        //     })
        // }
        // getBooks
        // .catch((error) => {
        //     console.log("Error")
        // })
        // .finally(() => {
        //     //ejecutar siempre y al final
        //     setLoading(false);
        // })  
       
    }, [categoryId]); //eslint-disable-line
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