import { useState } from "react";

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
            <h3>Counter</h3>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <div>
                <button className="option" onClick={()=>onAdd(count)}>Agregar al Carrito</button>
            </div> 
        </div>     
    )
}

export default FunctionCounter;