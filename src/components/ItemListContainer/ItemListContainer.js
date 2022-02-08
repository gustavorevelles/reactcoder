const ItemListContainer = ({ greeting = 'Hola, soy el contenido!', ...rest}) => {


    return (

        <>
        <h3>{greeting}</h3>
        </>
    )
}

export default ItemListContainer