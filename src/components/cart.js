import { useState } from "react";
import cart from "./cart-logic";
import Navbar from "./navbar";

const Cart = () => {
    const [total, setTotal] = useState(cart.totalCost);
    const [items, setItems] = useState(cart.added.length)
    return (
        <div>
            <Navbar items={items} className='nav home'/>
            <div className='cart'>
                {total > 0
                ? cart.added.map((entry, index) => {
                    return (
                        <div className='cart entry' key={index}>
                        <img src={entry.img} alt={'Picture of ' + entry.name} />
                        <h2>{entry.name}</h2>
                        <p>Price: {entry.price}</p>
                        <button onClick={e => {cart.remove(entry); setTotal(cart.totalCost); setItems(cart.added.length)}}>Remove from Cart</button>
                    </div>
                    )    
                })  
                :<div>You have no products in your cart</div>
                }
            </div>
            {items > 0 && <div>Total: {total}</div>}
        </div>
        
    )
}

export default Cart