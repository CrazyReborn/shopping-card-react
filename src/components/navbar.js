import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/xbox">XBOX</Link>
            <Link to="/playstation">PLAYSTATION</Link>
            <Link to="/switch">SWITCH</Link>
            <Link to="/cart">CART</Link>
        </nav>
    )
}

export default Navbar