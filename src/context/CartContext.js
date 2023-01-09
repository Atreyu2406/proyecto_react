import React, { useState, createContext } from "react"

// const useCartContext = () => useContext(CartContext)

const CartContext = createContext("")

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addProduct = (item, quantity) => {
        let newCart;
        let product = cart.find(product => product.id === item.id);
        if (product) {
            product.quantify += quantity;
            newCart = [...cart];
        } else {
            product = {...item, quantity: quantity};
            newCart = [...cart, product]
        }
        setCart(newCart)
    }
    
    const clearCart = () => setCart([])

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

    const totalPrice = () => {
        return cart.reduce((prev, act ) => prev + act.quantity * act.price, 0)
    }
    
    const totalProducts = () => {
        return cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
    }
    
    return (
        <CartContext.Provider value={{
            clearCart, 
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}    
        </CartContext.Provider>
    )
}

export default CartContext