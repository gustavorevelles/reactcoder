import { useState } from "react";

const ItemCount = ({stock = 1, initial = 1, onAdd}) => {
    
    const [quantity, setQuantity] = useState (initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }
    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div align="center">
            <table>
                <tbody>
                    <tr>
                        <td align="left"><button className="" onClick={()=>decrement()} >-</button></td>
                        <td align="center">{quantity}</td>
                        <td align="right"><button className="" onClick={()=>increment()} >+</button></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan="5"><button className="" onClick={()=>onAdd(quantity)} >Agregar</button></td>
                    </tr>
                </tbody>
            </table>
    
        </div>
    )
}



export default ItemCount