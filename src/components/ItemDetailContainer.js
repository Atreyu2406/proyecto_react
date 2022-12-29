import ItemDetail from "./ItemDetail"
import { getBook } from "../asyncmock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [book, setBook] = useState([]);
    const { productId } = useParams()
    useEffect(() => {
        getBook(productId) 
        .then((res) => {
            setBook(res);
        })
        .catch((error) => {
            console.log("Error")
        })
        .finally(() => {
            //ejecutar siempre y al final
            // setBook();
        })
    }, [productId]);
    return (
        <div className="item-detail-container">
            <ItemDetail product={book} key={book.id}/>
        </div>
        
    )
}

export default ItemDetailContainer;