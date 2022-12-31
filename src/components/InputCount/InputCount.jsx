import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const InputCount = () => {
    return (
        <>
            <Link to="/cart">
                <Button variant="dark">Ver carrito</Button>
            </Link>

            <Link to="/">
                <Button variant="dark">Home</Button>
            </Link>
        </>
    )
}