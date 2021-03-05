import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const {removeItem} = props;
    return (
        <div>
            <h1>{name}</h1>
            <p>Quantity: {quantity}</p>
            <p>Price: $ {price}</p>
            <br/>
            <button onClick={()=>removeItem(key)} className="add-cart-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;