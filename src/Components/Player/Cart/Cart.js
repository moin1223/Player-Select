import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const cart =props.cart;
    console.log(cart);
    const total=cart.reduce((total,player)=>total+player.marketvalue,0);
    return (
        <div className='cart'>
            <h4>Full Team</h4>
            <h6>Selectecd player:{cart.length}</h6>
            <h6>Total Price:${total}</h6>
        </div>
    );
};

export default Cart;