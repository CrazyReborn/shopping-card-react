import cart from "./cart-logic";

const Product = (props) => {
    const {setItems} = props;
    const {className, productEntry} = props;
    return (
        <div className={className}>
            <h2>{productEntry.name}</h2>
            <img src={productEntry.img} alt={'Picture of ' + productEntry.name}/>
            <p className='price'>${productEntry.price}</p>
            <button onClick={(e) => {cart.add(productEntry); setItems(cart.added.length)}} className='add button'>Add</button>
        </div>
    )
}

export default Product