import { useState } from 'react';
import './App.css';
import Productlist from './components/productlist';
import Cart from './components/cart';

function App() {
  const[cart, setCart] = useState([]);

  {/* find if the product is already in the cart */}
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If the product is already in the cart, increase its quantity
      setCart(
        cart.map((item) =>{
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1};
          }
          else{
            return item;
          }
        })
      )
    }
    // If the product is not in the cart, add it with quantity 1
    else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  return (
    <div className="App">
      <h1 className='apptitle'>Welcome to Wilson Lin Market</h1>
      <Productlist addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
