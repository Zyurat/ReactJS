import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({product}) => {
    return (
        <div className="d-inline-block p-2">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.nombre}</Card.Title>
                    <Card.Text>
                        <span>${product.precio}</span>
                    </Card.Text>
                    <Link to={`/details/${product.id}`}>
                        <Button variant="dark">Más información</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}