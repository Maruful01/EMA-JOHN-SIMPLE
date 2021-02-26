import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../../product/Product';
import './shop.css';
const Shop = () => {
  const data = (fakeData.slice(0, 10));
  const [products, setProducts] = useState(data)
  const handleAddProduct = (product) => {console.log (product)};
    return (
        <div className="shop-container">
            <div className="product-container">
            {
                products.map (pd => <Product handleAddProduct={handleAddProduct} product={pd}></Product>)
            }
            </div>
            <div className="cart-container">
                <h1>This is cart</h1>
            </div>
      
        </div>
    );
};

export default Shop;