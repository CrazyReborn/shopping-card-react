import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import cart from "./cart-logic";

const Navbar = (props) => {
    const {className} = props;
    return (
        <nav className={className}>
            <Link to="/">HOME</Link>
            <Link to="/xbox">XBOX</Link>
            <Link to="/playstation">PLAYSTATION</Link>
            <Link to="/switch">SWITCH</Link>
            <Link to="/cart">CART: </Link>
        </nav>
    )
}

export default Navbar