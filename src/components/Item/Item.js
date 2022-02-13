import { Button } from 'react-bootstrap';
import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"


const Item = ({product})=> {

    return  (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Stock: {product.stock}</Card.Text>
                <ItemCount></ItemCount>
            </Card.Body>
        </Card>
        </>
    )

}

export default Item;