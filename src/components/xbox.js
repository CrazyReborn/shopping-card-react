import Navbar from "./navbar";
import Product from "./product";
import { xboxSeriesX, xboxSeriesS } from '../products'
import { useState } from "react";
import cart from './cart-logic';

const Xbox = () => {
    const [items, setItems] = useState(cart.added.length);
    return (
        <div>
            <Navbar items={items} className='nav xbox' />
            <div className='products xbox'>
                <Product setItems={setItems} className='entry' productEntry={xboxSeriesS} />
                <Product setItems={setItems} className='entry' productEntry={xboxSeriesX} />
            </div>
        </div>
    )
}

export default Xbox