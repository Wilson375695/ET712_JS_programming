import '../App.css';

const Cart = ({cart}) => {
    return(
        <div className='cart'>
            <h1 className='apptitle'>Your Shopping Cart</h1>
            <section className='cartcontainer'>
                {cart.length === 0 && <p className='emptymsg'>Your cart is empty.</p>}
                {cart.map((item) => (
                    <div key={item.id} className='cartitem'>
                        <img src={item.image} alt={item.name} className='cartitemimage' />
                        <p className='cartitemname'>{item.name}</p>
                        <p className='cartitemprice'>Price: ${item.price} / lb /each</p>
                        <p className='cartitemquantity'>Quantity: {item.quantity}</p>
                        <p className='cartitemtotal'>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                        <button className='removebtn'>Remove</button>
                    </div>
                ))}
                <p className='carttotal'>
                    Total: ${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
                </p>
            </section>
        </div>
    )
}

export default Cart;