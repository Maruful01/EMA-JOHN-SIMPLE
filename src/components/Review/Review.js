import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState ([]);
    const handlePlaceOrder = () => {
        setCart([]);
        processOrder();
    }
    useEffect(()=>{
        const savedCard = getDatabaseCart ();
        const productKeys = Object.keys(savedCard)  
        const cartProduct = productKeys.map (key => {
             const product = fakeData.find (pd => pd.key === key);
             product.quantity = savedCard[key];
             return product
        });
        setCart (cartProduct);
        }, []);
        const removeItem = (pdKey)=> {
            const newKey = cart.filter(pd => pd.key !== pdKey);
            setCart(newKey)
            removeFromDatabaseCart(pdKey)
        }
    return (
    <div className="shop-container">
             <div className="product-container">
             {
                 cart.map(pd => <ReviewItem key={pd.key} removeItem={removeItem} product={pd}></ReviewItem>)
             }
             </div>
             <div className="cart-container">
                 <Cart cart={cart}>
                 <button onClick={handlePlaceOrder} className="add-cart-btn">Place order</button>
                 </Cart>

             </div>

               
    </div>
    );
};

export default Review;