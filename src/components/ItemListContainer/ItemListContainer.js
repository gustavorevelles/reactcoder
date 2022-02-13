import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList";
import { Navbar, NavbarBrand } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";


const ItemListContainer = ( { greeting = "Hello" } ) => {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        getProducts
        .then((res)=> {
            setProducts(res)
        })
        .catch((error)=> {
            console.log(error)
        })
        .finally(() => {
            setLoading (false)
        })

    }, []);

    

    const handleOnAdd = (quantity) => {
        console.log(`Se han agregado ${quantity} productos`)
    }


    return (
    <>
        
        <Container>
            <Row>
            {loading ? (<h1>Cargando...</h1>) : (

                <>
                <h3>{ greeting }</h3>
                <ItemList products={products} />
                <ItemCount stock={10} initial={1} onAdd={handleOnAdd} />
                </>

            )}
            
            </Row>
        </Container>
        
    </>
    )
}

export default ItemListContainer