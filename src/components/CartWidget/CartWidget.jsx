import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css'

function CartWidget () {
    const {totalQuantity} = useCartContext()

    return (
        <div>
            <Link to="/cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElYKJMme7umaYdeq4phRYoWTL1yi1TrOEWg&usqp=CAU"
                alt="carrito" title="carrito" height={40}/>
            </Link>
        
            {totalQuantity() !== 0 && totalQuantity()}
        </div>
    )
}

export default CartWidget;