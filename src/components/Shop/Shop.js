import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../../product/Product';
import Cart from '../Cart/Cart';
import './shop.css';
const Shop = () => {
  const data = (fakeData.slice(0, 10));
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(data)
  const handleAddProduct = (product) => {
      console.log (product)
      const newCart = [...cart, product];
      setCart(newCart);

    };
    return (
        <div className="shop-container">
            <div className="product-container">
            {
                products.map (pd => <Product handleAddProduct={handleAddProduct} product={pd}></Product>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
      
        </div>
    );
};

export default Shop;