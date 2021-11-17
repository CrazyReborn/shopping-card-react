import Navbar from "./navbar";
import Product from "./product";
import { xboxSeriesX, xboxSeriesS } from '../products'

const Xbox = () => {
    return (
        <div>
            <Navbar className='nav xbox' />
            <div className='products'>
                <Product className='entry' productEntry={xboxSeriesS} />
                <Product className='entry' productEntry={xboxSeriesX} />
            </div>
        </div>
    )
}

export default Xbox