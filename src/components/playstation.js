import Navbar from "./navbar";
import { playstation5 } from "../products";
import Product from "./product";
import { useState } from "react";
import cart from "./cart-logic";

const Playstation = () => {
    const className = "nav playstation";
    const [items, setItems] = useState(cart.added.length);
    return (
        <div>
            <Navbar items={items}className={className} />
            <div className='products'>
                <Product setItems={setItems} className='entry ps' productEntry={playstation5} />
            </div>
            
        </div>
        
    )
}

export default Playstation