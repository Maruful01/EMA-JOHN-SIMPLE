import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, prd) => total + prd.price , 0)
    let total = 0;
    for (let i =0; i < cart.length; i++) {
        const product = cart[i];
        const quantity = product.quantity;
        console.log ("quantity", quantity)
        total = total + product.price * quantity;
      
    }
    const vat = Math.round(total / 10);
    let shipping = 0;
    if (total > 0) {
        shipping = 6;
    }
    else if (total > 30) {
        shipping = 4;
    }
    else if (total > 50) {
        shipping = 1;
    }
    return (
        <div>
            <h3>Order summary</h3>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: {Math.round(total)}</p>
            <p>Shipping cost: {shipping}</p>
            <p>Total Vat: {vat}</p>
            <p>Total price: {Math.round(total + vat + shipping)} </p>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;