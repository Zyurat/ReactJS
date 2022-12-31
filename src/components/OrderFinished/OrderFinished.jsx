import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"

const OrderFinished = ({orderId}) => {
   return (
    <>
        <h2 className="p-5">Número de orden: {orderId}</h2>
        <Link to= "/" > 
        <Button variant="dark">Home</Button>
        </Link>
    </>
    )
}

export default OrderFinished