import ItemDetail from "./ItemDetail"
import { getBook } from "../asyncmock";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [book, setBook] = useState([]);
    // const { bookId } = useParams()
    useEffect(() => {
        getBook
        .then((res) => {
            setBook(res);
        })
        .catch((error) => {
            console.log("Error")
        })
        .finally(() => {
            //ejecutar siempre y al final
            setBook();
        })
    }, []);
    return (
        <div>
            <ItemDetail product={book}/>
        </div>
        
    )
}

export default ItemDetailContainer;