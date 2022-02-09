import { useState } from "react";

const FunctionCounter = () => {

    const [count, setCount] = useState (0);

    let stock = 5;

    if (count < 1) {
        console.log("F")
    }

    const decrement = () => {
        if (count > 0) {
            setCount (count -1)
        }
    } 

    const increment = () => {
        setCount (count +1)
    }

    return (

        <>
        <h3>Contador</h3>
        <h3>{count}</h3>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        </>
    )
}

export default FunctionCounter