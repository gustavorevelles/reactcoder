import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ( { greeting = "Hello" } ) => {

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)
    }
    return (
      <>
        <h3 >{ greeting }</h3>
        <ItemCount stock={10} initial={2} onAdd={handleOnAdd} />
     </>
    )
}

export default ItemListContainer