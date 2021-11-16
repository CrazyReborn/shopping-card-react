import { Route, Routes, BrowserRouter} from "react-router-dom";
import App from "../App";

const RouterSwitch = () => {
    return (
        <div className='navbar'>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/xbox'></Route>
                <Route path='/playstation' ></Route>
                <Route path='/switch'></Route>
                <Route path='/cart'></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouterSwitch;