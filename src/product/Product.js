import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './product.css';
const Product = (props) => {
    const item = props.product;
   // console.log (props)
    return (
        <div className='product'>
            <div className='product-img'>
            <img src={item.img} alt=""/>
            </div>
           <div className='product-details'>
           <h3>{item.name}</h3>
           <p> <small>By: {item.seller}</small> </p>
           <br/>
           <p>${item.price}</p>
           <p> <small>Only  {item.stock} left in stock - order soon</small> </p>
           <button className="add-cart-btn" onClick={() => props.handleAddProduct (item)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
           </div>
        </div>

    );
};

export default Product;