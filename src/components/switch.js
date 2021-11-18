import Navbar from "./navbar";
import { nintendoSwitchOled, nintendoSwitchRegular } from "../products";
import { useState } from "react";
import cart from "./cart-logic";
import Product from "./product";

const Switch = () => {
    const [items, setItems] = useState(cart.added.length);
    return (
        <div>
            <Navbar items={items} className='nav switch' />
            <div className='products'>
                <Product setItems={setItems} className='entry switch regular' productEntry={nintendoSwitchRegular} />
                <Product setItems={setItems} className='entry switch oled' productEntry={nintendoSwitchOled} />
            </div>
        </div>
    )
}

export default Switch