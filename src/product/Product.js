import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './product.css';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const item = props.product;
    return (
        <div className='product'>
            <div className='product-img'>
            <img src={item.img} alt=""/>
            </div>
           <div className='product-details'>
           <h3><Link to={"/product/"+item.key}>{item.name}</Link></h3>
           <p> <small>By: {item.seller}</small> </p>
           <br/>
           <p>${item.price}</p>
           <p> <small>Only  {item.stock} left in stock - order soon</small> </p>
          {props.showAddToCart && <button  className="add-cart-btn" onClick={() => props.handleAddProduct (item)}>
               <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
           </div>
        </div>

    );
};

export default Product;