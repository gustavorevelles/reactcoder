import Item from "../Item/Item"

const ItemList = ({products}) => {

    return(
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            margin:'10px'
        }}
        >
            {products.map((product)=>(
                
                <Item product={product} key={product.id} />
            ))}
        </div>
    )
}

export default ItemList