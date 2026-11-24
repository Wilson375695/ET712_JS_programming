import '../App.css';
import apple from '../images/apple.png';
import orange from '../images/orange.png';
import grape from '../images/grape.png';
import App from '../App.js';

// create a list of products with metadata
const products =[
    {id:1, name:"Apple",  price:1,   was:2.5, image: apple},
    {id:2, name:"Orange", price:1.5, was:2.8, image: orange},
    {id:3, name:"Grape",  price:3,   was:5.0, image: grape},
]

const Productlist = ()=>{
    return(
        <>
            <h2 className="producttitle">Products</h2>
            <section className="cardcontainer">
                {
                    products.map((product)=>{
                        return(
                            <div key={product.id} className="card">
                                <img src={product.image} alt={product.name} />
                                <p className="productname">{product.name}
                                    <s>${product.was}/lb</s>
                                    <span>${product.price}</span> / lb
                                </p>
                                <button className="btn_addcard" onClick={() => App.addToCart(product)}>Add to Cart</button>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default Productlist;