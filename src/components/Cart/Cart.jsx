import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);
    let total =0;
    let totalShipping=0
    for (const product of cart){
        total =total+ product.price;
        totalShipping = totalShipping+product.shipping;
    }
    const text = total*7/100;
    const grandTotal = total+totalShipping+text;

    return (
        <div className='cart'>
            <h4 className='h'>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping.toFixed(2)}</p>
                <p>Tax:${text}</p>
                <h6 className='grand'>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;