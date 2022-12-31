import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FormItem from '../FormItem/FormItem';

const CartListF = ({dataForm, cartList, handleOnChange, addOrder, deleteOneItem, totalPrice, emptyCart}) => {
    return (
        <div>

        <div className="d-flex flex-row align-items-center">
            {cartList.map(prod =>

                <div key={prod.id} className="d-inline-block p-2 pt-5 pb-5">
                    <Card style={{width: '10rem'}} className="card border border-secondary">
                        <Card.Img variant="top" src={prod.img} />

                        <Card.Body>
                            <Card.Title>{prod.nombre}</Card.Title>
                            <Card.Text className="d-flex flex-column">
                                <span className="card-text">${prod.precio}</span>
                                <span className="card-text">Cantidad: {prod.cant}</span>
                            </Card.Text>
                        </Card.Body>

                        <Button variant="dark" onClick={() => deleteOneItem(prod.id)}>X</Button>
                    </Card>
                </div>
            )}

            <h2 className=" card pb-3">Precio total: ${totalPrice()}</h2>

        </div>

        <FormItem dataForm={dataForm} handleOnChange={handleOnChange} addOrder={addOrder}/>

        <Button variant="info" onClick={emptyCart}>Vaciar carro de compras</Button>
    </div>
    )
}

export default CartListF