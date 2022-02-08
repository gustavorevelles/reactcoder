const CartWidget = ({ title = 'Carrito', ...rest}) => {

    return (
        <>

        <button type="button" className="btn btn-primary"> 
            <img src="/images/cart.svg" alt="" title={title} style={{marginRight: 10, width:20}} />
            <span className="badge bg-secondary">0</span>
        </button>
       
        </>
    )
}

export default CartWidget