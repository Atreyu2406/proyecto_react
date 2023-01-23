import { Form, Link } from "react-router-dom"
import { useContext, useState, useRef } from "react"
import CartContext from "../context/CartContext"
import ItemCart from "./ItemCart"
import "./Cart.css"
import { writeBatch, getDoc, doc, addDoc, collection } from "firebase/firestore"
import { firestoreDb } from "../services/firebase/firebase"
import NotificationContext from "../services/notification/NotificationServices"

const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        name: "",
        phone: "",
        address: "",
        comment: ""
    })
    const { cart, totalPrice, clearCart } = useContext(CartContext)
    const contactFormRef = useRef()
    const [ orders, setOrders ] = useState([])

    const setNotification = useContext(NotificationContext);

    const confirmOrder = () => {
        setProcessingOrder(true)

        const objOrder = {
            buyer: contact,
            items: cart,
            total: totalPrice,
            date: new Date()
        }

        const batch = writeBatch(firestoreDb)
        const outOfStock = []

        objOrder.items.forEach(prod => {
            getDoc(doc(firestoreDb, "books", prod.id))
            .then(res => {
                if(res.data().stock >= prod.quantity) {
                    batch.update(doc(firestoreDb, "books", res.id), {
                        stock: res.data().stock - prod.quantity
                    })
                } else {
                    outOfStock.push({ id: res.id, ...res.data()})
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(firestoreDb, "orders"), objOrder)
            .then(({id}) => {
                batch.commit()
                .then(() => {
                    setNotification("success", `La orden se generó exitosamente, ${id}`)
                })
                .catch(error => {
                    setNotification("error", error)
                })
                .finally(() => {
                    setProcessingOrder(false)
                })
            })
        }
    }

    if(processingOrder) {
        return <h1>Se está procesando la orden</h1>
    }

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to="/">Hacer compras</Link>
            </>
        )
    }

    return (
        <>
            {
            !processingOrder && cart.length > 0 ?
                cart.map(product => <ItemCart key={product.id} product={product}/>) :
                "Procesando Orden"
            }
            {/* {cart.map(product => <ItemCart key={product.id} product={product}/>)} */}
            {(!processingOrder && cart.length > 0) && <p className="cart-total">Total: {totalPrice()}</p>} 
            {(!processingOrder && cart.length > 0) && <button onClick={()=>clearCart()} className="cart-total">Cancelar Compra</button>}
            {(!processingOrder && cart.length > 0) && <button onClick={()=>confirmOrder()} className="cart-total">Confimar Compra</button>}
            {/* {(!processingOrder && (contact.phone !== "" && contact.address !== "" && contact.comment !== "" && contact.name !== "")) &&
                <div>
                    <h4>Nombre: {contact.name}</h4>
                    <h4>Nombre: {contact.phone}</h4>
                    <h4>Nombre: {contact.address}</h4>
                    <h4>Nombre: {contact.comment}</h4>
                    <button onClick={() => setContact({ phone: "", address: "", comment: ""})}></button>
                </div>
            }     */}
            {/* {(!processingOrder && cart.length > 0) && <Togglable buttonLabelShow={(contact.phone !== "" && contact.address !== "" && contact.comment !== "" && contact.name !== "")}} */}
        </>
    )
}

export default Cart