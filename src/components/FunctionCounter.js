import { useState } from "react";
import "./FunctionCounter.css"



const FunctionCounter = ({stock=1, initial=1, onAdd}) => {
    const [count, setCount] = useState(initial);
    const decrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
        // setCount(count - 1);
        //count--
    }
    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        //count++
        }
    }
    return (
        <div>
            <div className="counter">
                <button className="counter-button" onClick={decrement}>-</button>
                <h3>{count}</h3>
                <button className="counter-button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="option" onClick={()=>onAdd(count)}>Agregar al Carrito</button>
            </div> 
        </div>     
    )
}

export default FunctionCounter;