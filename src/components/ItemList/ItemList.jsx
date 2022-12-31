import { Item } from "../Item/Item";

function ItemList ({products, loading}) {
    return (
        <section className="d-inline-block p-3">

            {loading ?

            <img src="https://media.tenor.com/hlKEXPvlX48AAAAi/loading-loader.gif" alt="loading" title="loading"/>
            :   
            products.map(product => 
                <Item key={product.id} product={product}/>
            )
            }

        </section>
    )
}

export default ItemList;