import { Route, Routes, BrowserRouter} from "react-router-dom";
import App from "../App";
import Cart from "./cart";
import Playstation from "./playstation";
import Switch from "./switch";
import Xbox from "./xbox";
import cart from './cart-logic';

const RouterSwitch = () => {
    return (
        <div className='navbar'>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/xbox' element={<Xbox />}></Route>
                <Route path='/playstation' element={<Playstation />}></Route>
                <Route path='/switch' element={<Switch />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouterSwitch;